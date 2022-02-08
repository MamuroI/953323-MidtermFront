import React, { createContext, useContext, useEffect, useState } from "react";
import { client, getStock, getInfo, buyCoin, sellCoin } from "../../../api";

export const context = createContext();

export const useController = () => new Controller(useContext(context));

class Controller {
    constructor(context) {
        this.context = context;
        this.actionMode = context.actionMode;
        this.setActionMode = context.setActionMode;

        this.selectBuyAmount = context.selectBuyAmount;
        this.setSelectBuyAmount = context.setSelectBuyAmount;

        this.selectSellAmount = context.selectSellAmount;
        this.setSelectSellAmount = context.setSelectSellAmount;

        this.perCoin = context.perCoin;

        this.totalBuyPrice = context.totalBuyPrice;
        this.totalSellPrice = context.totalSellPrice;

        this.ownedCoin = context.ownedCoin;
        this.setOwnedCoin = context.setOwnedCoin;

        this.userBalance = context.userBalance;
        this.setUserBalance = context.setUserBalance;

        this.stock = context.stock;
        this.setStock = context.setStock;

        this.userId = context.userId;
        this.setUserId = context.setUserId;

        this.buyLimit = context.buyLimit;
        this.setBuyLimit = context.setBuyLimit;
    }

    setPerCoin(int) {
        if (int > 0) {
            this.context.setPerCoin(int);
        } else {
            this.context.setPerCoin(0);
        }
    }

    handleLogout() {
        localStorage.removeItem("user");
        window.location.reload(false);
    }

    handleBuy() {
        if (this.context.selectBuyAmount <= this.context.buyLimit) {
            let data = {
                userid: this.userId,
                selectBuyAmount: this.selectBuyAmount,
            };
            buyCoin(localStorage.getItem("token"), data).then((res) => {
                console.log(res);
                this.setOwnedCoin(res.data.coinAmount);
                this.setUserBalance(res.data.money);

            });
        }
        this.handleCancel()

    }

    handleSell() {
        if (this.context.selectSellAmount <= this.context.ownedCoin) {
            let data = {
                userid: this.userId,
                selectSellAmount: this.selectSellAmount,
                perCoin: this.perCoin,
            };
            sellCoin(localStorage.getItem("token"), data).then((res) => {
                console.log(res);
                this.setOwnedCoin(res.data.coinAmount);
                this.setUserBalance(res.data.money);
                this.setBuyLimit(res.data.buyLimit);

            });
        }
        this.handleCancel()

    }

    handleCancel(){
        this.setSelectBuyAmount(0)
        this.setSelectSellAmount(0)
        this.setPerCoin(0);
    }

    addBuySelect() {
        if (this.context.selectBuyAmount < this.context.buyLimit) {
            this.context.setSelectBuyAmount(this.context.selectBuyAmount + 1);
            console.log(this.selectBuyAmount);
        }
    }

    minusBuySelect() {
        if (this.context.selectBuyAmount > 0) {
            this.context.setSelectBuyAmount(this.context.selectBuyAmount - 1);
            console.log(this.selectBuyAmount);
        }
    }

    addSellSelect() {
        if (this.context.selectSellAmount < this.context.ownedCoin) {
            this.context.setSelectSellAmount(this.context.selectSellAmount + 1);
            console.log(this.selectSellAmount);
        }
    }

    minusSellSelect() {
        if (this.context.selectSellAmount > 0) {
            this.context.setSelectSellAmount(this.context.selectSellAmount - 1);
            console.log(this.selectSellAmount);
        }
    }
}

export function HomeProvider({ children }) {
    const [actionMode, setActionMode] = useState(0);
    const [selectBuyAmount, setSelectBuyAmount] = useState(0);
    const [selectSellAmount, setSelectSellAmount] = useState(0);
    const [totalBuyPrice, setTotalBuyPrice] = useState(0);
    const [totalSellPrice, setTotalSellPrice] = useState(0);
    const [perCoin, setPerCoin] = useState(10);
    const [ownedCoin, setOwnedCoin] = useState(7);
    const [userBalance, setUserBalance] = useState(40);
    const [stock, setStock] = useState(0);
    const [userId, setUserId] = useState(0);
    const [buyLimit, setBuyLimit] = useState(0);

    useEffect(() => {
        setTotalBuyPrice(selectBuyAmount * 10);
    }, [selectBuyAmount]);

    useEffect(() => {
        if (ownedCoin > 5) {
            setTotalSellPrice(selectSellAmount * perCoin);
        } else {
            setTotalSellPrice(selectSellAmount * 10);
        }
    }, [selectSellAmount, perCoin]);

    useEffect(() => {
        getStock(localStorage.getItem("token")).then((res) => {
            console.log("res", res);
            setStock(res.data.amount);
        });
    });

    useEffect(() => {
        getInfo(
            localStorage.getItem("token"),
            JSON.parse(localStorage.getItem("user")).id
        ).then((res) => {
            console.log("res from getinfo", res);
            setUserBalance(res.data.member.money);
            setOwnedCoin(res.data.member.coinAmount);
            setBuyLimit(res.data.member.buyLimit);
            setUserId(res.data.member.id);
        });
    });

    useEffect(() => {
        setSelectBuyAmount(0);
        setSelectSellAmount(0);
        setPerCoin(0);
    }, [actionMode]);

    return (
        <context.Provider
            value={{
                actionMode,
                setActionMode,
                selectBuyAmount,
                setSelectBuyAmount,
                perCoin,
                setPerCoin,
                selectSellAmount,
                setSelectSellAmount,
                totalBuyPrice,
                setTotalBuyPrice,
                totalSellPrice,
                setTotalSellPrice,
                ownedCoin,
                setOwnedCoin,
                userBalance,
                setUserBalance,
                stock,
                userId,
                setUserId,
                buyLimit,
            }}
        >
            {children}
        </context.Provider>
    );
}

import React, { createContext, useContext, useEffect, useState } from "react";

export const context = createContext();

export const useController = () => new Controller(useContext(context));

class Controller {
    constructor(context) {
        this.context = context;
        this.actionMode = context.actionMode;
        this.setActionMode = context.setActionMode;

        this.selectBuyAmount = context.selectBuyAmount;
        this.selectSellAmount = context.selectSellAmount;

        this.perCoin = context.perCoin;

        this.totalBuyPrice = context.totalBuyPrice;
        this.totalSellPrice = context.totalSellPrice;

        this.ownedCoin = context.ownedCoin;
        this.setOwnedCoin = context.setOwnedCoin;

        this.userBalance = context.userBalance;
        this.setUserBalance = context.setUserBalance;
    }

    setSelectBuyAmount(int) {
        if (this.context.selectBuyAmount + int >= 0) {
            if (this.context.selectBuyAmount + int <= 5) {
                this.context.setSelectBuyAmount(
                    this.context.selectBuyAmount + int
                );
            }
        }
    }

    setSelectSellAmount(int) {
        if (this.context.selectSellAmount + int >= 0) {
            if (this.context.selectSellAmount + int <= this.context.ownedCoin) {
                this.context.setSelectSellAmount(
                    this.context.selectSellAmount + int
                );
            }
        }
    }

    setPerCoin(int) {
        if (int > 0) {
            this.context.setPerCoin(int);
        } else {
            this.context.setPerCoin(0);
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

    useEffect(() => {
        setTotalBuyPrice(selectBuyAmount * 10);
    }, [selectBuyAmount]);

    useEffect(() => {
        setTotalSellPrice(selectSellAmount * perCoin);
    }, [selectSellAmount, perCoin]);

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
            }}
        >
            {children}
        </context.Provider>
    );
}

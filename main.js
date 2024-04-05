/**
 * ICS4U - Mr. Brash
 *  
 * 2.8 - Inheritance & Super! 🦸🏻
 * 
 * Read the README.md file (right-click it and select Open Preview)
 * 
 * Author: 
 */

'use strict';

// The lib.round() function is available
const lib = require("./library.js");

class BankAccount {
    nickname = "My Account";
    #type = "Account";
    #balance = 0.0;

    constructor(nickname, type, balance) {
        this.nickname = nickname;
        this.#type = type;
        this.#balance = balance;
    }

    debit(amt) {
        if ((amt>0)&&(this.#balance>=amt)){
            this.#balance -= amt;
            return "successful";
        }
        else return "unsuccessful";
    }

    credit(amt) {
        if (amt>0) {
            this.#balance += amt;
            return "successful";
        }
        else return "unsuccessful";
    }
}

class SavingsAccount extends BankAccount {
    nickname = "Basic Savings";
    #type = "Savings Account";
    #interest_rate = 0.03;

    constructor(nickname, type, interest_rate) {
        this.nickname = nickname;
        this.#type = type;
        this.#interest_rate = interest_rate;
    }

    get interest_rate()
}
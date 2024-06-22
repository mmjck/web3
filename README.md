# Tweether

##  Decentralised Twitter clone built on Ethereum.


### Planning the structure
Before we start coding, it's worth planning the structure of our DApp based on the features that we want. In Tweether, we want our contracts to be able to:




#### Features
- Register new users

- Find users based on their ID or username, and get their info

- Post new tweets

- Find tweets based on different criterias (for example their author) and read them

To accomplish this, we're going to have 5 contracts:



#### Architecture
![Architecture](https://github.com/mmjck/web3/assets/55866244/92e4f4bf-f49a-4cdd-aeda-79b127b736cb)
#### Requirements
- NodeJs 
    v20.11.1

[Mode details here](https://nodejs.org/pt/download/package-manager)

Ganache CLI v6.12.2 (ganache-core: 2.13.2)

```
npm i ganache-cli
```

Truffle v5.11.5

```
npm install -g truffle
```

----

To run this project, you need start local blockchain with
```
ganache-cli
```

run migrations to deploy all contract

```
truffle migrate
```

and run the tests

```
truffle test
```


The tests will execute each operation described above
 

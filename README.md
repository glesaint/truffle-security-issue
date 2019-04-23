# Description
This repo exists to reproduce this issue: https://github.com/ConsenSys/truffle-security/issues/186

# Installation
Run
```bash
$ npm install
```

# Security Audit
Run
```bash
$ export MYTHX_ETH_ADDRESS=(YOUR MYTHX ADDRESS)
$ export MYTHX_PASSWORD=(YOUR MYTHX PASSWORD)
$ truffle run verify
```

# Current Report & Issue
Line:Column numbers found in the report do not correspond to actual source locations.

```bash
$ truffle run verify
Welcome to MythX! You are currently running in Free mode.

        Address |****************************************************************************************************| 100% || Elapsed: 73.6s ✓ completed
           Math |****************************************************************************************************| 100% || Elapsed: 11.8s ✓ completed
         Arrays |****************************************************************************************************| 100% || Elapsed: 72.2s ✓ completed
       SafeMath |****************************************************************************************************| 100% || Elapsed: 9.8s ✓ completed
          ERC20 |****************************************************************************************************| 100% || Elapsed: 10.1s ✓ completed
         IERC20 |****************************************************************************************************| 100% || Elapsed: 6.8s ✓ completed
  ERC20Burnable |****************************************************************************************************| 100% || Elapsed: 9.1s ✓ completed
  ERC20Detailed |****************************************************************************************************| 100% || Elapsed: 55.5s ✓ completed
ReentrancyGuard |****************************************************************************************************| 100% || Elapsed: 9.5s ✓ completed
      SafeERC20 |****************************************************************************************************| 100% || Elapsed: 10.7s ✓ completed
  TokenTimelock |****************************************************************************************************| 100% || Elapsed: 54.5s ✓ completed

./truffle-security-issue/contracts/utils/Address.sol
  1:0  warning  A floating pragma is set  SWC-103

./truffle-security-issue/contracts/math/Math.sol
  1:0  warning  A floating pragma is set  SWC-103

./truffle-security-issue/contracts/math/SafeMath.sol
  1:0  warning  A floating pragma is set  SWC-103

./truffle-security-issue/contracts/token/ERC20/ERC20Detailed.sol
  1:0  warning  A floating pragma is set  SWC-103

./truffle-security-issue/contracts/utils/ReentrancyGuard.sol
  1:0  warning  A floating pragma is set  SWC-103

./truffle-security-issue/contracts/token/ERC20/TokenTimelock.sol
  54:4     warning  Multiple sends are executed in one transaction  SWC-113
  64:1545  warning  The contract executes an external message call  SWC-107

✖ 7 problems (0 errors, 7 warnings)

MythX Logs:

./truffle-security-issue/contracts/utils/Address.sol
UUID: 156cace7-83ce-48a6-a35b-0113e386268a

./truffle-security-issue/contracts/math/Math.sol
UUID: 1848aa1b-2927-42fd-a30e-ce81b7577ff2

./truffle-security-issue/contracts/utils/Arrays.sol
UUID: e8700bfc-acc5-46ba-a17a-86fc21d90761

./truffle-security-issue/contracts/math/SafeMath.sol
UUID: 0ccb7be8-34b9-4463-9353-dd07fa0bbc85

./truffle-security-issue/contracts/token/ERC20/ERC20.sol
UUID: 727f330b-7049-4150-86e9-7994162b7c71

./truffle-security-issue/contracts/token/ERC20/IERC20.sol
UUID: 295f9885-9781-4bad-9315-67ebac5b3f7e

./truffle-security-issue/contracts/token/ERC20/ERC20Burnable.sol
UUID: deb7ee9a-126c-435f-96ce-00c8101c7970

./truffle-security-issue/contracts/token/ERC20/ERC20Detailed.sol
UUID: 4ae2f06f-c9c3-431b-9fe4-0764c6577ca8

./truffle-security-issue/contracts/utils/ReentrancyGuard.sol
UUID: e65004b9-eb2d-42bc-9695-9d51cab83462

./truffle-security-issue/contracts/token/ERC20/SafeERC20.sol
UUID: d29b0fdf-c50e-49a3-8897-a08bbb055a44
error: Maru:Error: Unknown user defined type

./truffle-security-issue/contracts/token/ERC20/TokenTimelock.sol
UUID: b957302c-b84d-443e-b31e-6f47810c2d2d
```

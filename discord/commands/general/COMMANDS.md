# **Commands for Discord Bot**

## **/event** : Used to log an event in the Clan's database.
## Usage: 
``` 
/event <event name> <player1's name> <player2's name> < ... > 
```
## Sends: 
```
An object containing the event name and player names.

Example:        {
                    "actionName": "Gelebron",
                    "usernames": ["rbm"]
                }
```
## Receives: 
```
         If sucessful: returns an Object containing the information for the successfully created event,
            otherwise: returns an Error String

Example:    {
                "event": {
                    "name": "Gelebron",
                    "categoryValues": {
                        "RAID": 1,
                        "EDL": 7
                    },
                    "_id": "642a4c4c13d94d55b760c001",
                    "timestamp": "2023-04-03T03:47:24.159Z",
                    "createdAt": "2023-04-03T03:47:24.160Z",
                    "updatedAt": "2023-04-03T03:47:24.160Z",
                    "__v": 0
                },
                "newPlayers": []
            }
```
---



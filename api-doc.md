# Odd Number Server
A Server built using Node js and Python.
This server sends you first 20 odd numbers from 0.

# List of available endpoints
- `GET /`

### GET /

description:
    get all first 20 odd numbers from 0 and set them into MySql database

Request:

- not need to put anything

Response:

- status: 200
- body:

```json
{
    "result": [
        1,
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19,
        21,
        23,
        25,
        27,
        29,
        31,
        33,
        35,
        37,
        39
    ]
}
```

Errors:
```json
{
  "message": "Internal Server Error",
  "code": 500
}
```
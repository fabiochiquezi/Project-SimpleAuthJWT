##Request - <div class="color-yellow inline">GET</div>

<div class="divider"></div>
<br>
<br>

### Logic:

<ol>
<li>[v] Should return all Simple ToDo</li>
<li>[v] Should give status 200.</li>
<li>[v] Should be a public route</li>
<br />
<li>[ ] Test database offline</li>
<li>[v] Test success process</li>
</ol>

<br />

#### Route:
<div class="color-yellow">GET /simple-todo</div>
<br />

#### Should receive:
<ul>
    <li><div class="color-yellow">Nothing</div></li>
</ul>
<br />

#### Example:
#### Example:
    {
        ok: true,
        message: message,
        data: [
            {
                "_id": "62990fa3acdbe18dae7c2f20",
                "content": "example",
                "createdAt": ISODate('2022-06-02T19:29:39.395Z'),
                "updatedAt": ISODate('2022-06-02T19:29:39.395Z'),
                "__v": 0
            },
            {
                "_id": "629fce25f349b19f43475911",
                "content": "example2",
                "createdAt": ISODate('2022-06-02T19:29:39.395Z'),
                "updatedAt": ISODate('2022-06-02T19:29:39.395Z'),
                "__v": 0
            }
        ]
    }

------------------------------------------------
<div class="bold">END</div>

<style>
    .color-yellow{
        color:  #fcf75e;
    }
    .inline{
        display: inline;
    }
    .bold{
        font-weight: bold;
    }

    .divider{
        width: 100%;
        height: 1px;
        background: #fff;
        margin-top: 10px;
    }
</style>
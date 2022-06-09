##Request - <div class="color-yellow inline">PUT</div>
<div class="divider"></div>
<br>
<br>

#### Logic:

<ol>
<li>[ ] Should be able to update one Doc</li>
<li>[ ] Should give status 200.</li>
<li>[ ] Should be a private route</li>
<br>
<li>[ ] Test if miss data</li>
<li>[ ] Test if wrong data type</li>
<li>[ ] Test if doc exists in the database</li>
<li>[ ] Test database offline</li>
<li>[ ] Test success process</li>
</ol>

<br />


#### Route:
<div class="color-yellow">PUT /simple-todo/:id</div>
<br />

#### Should receive:
<ul>
    <li><div class="color-yellow">content | <b>String</b></div></li>
</ul>
<br />

#### Example:
    {
        ok: true,
        message: message,
        data: {
            "_id": "62990fa3acdbe18dae7c2f20",
            "content": "updated",
            "createdAt": ISODate('2022-06-02T19:29:39.395Z'),
            "updatedAt": ISODate('2022-06-02T19:29:39.395Z'),
            "__v": 0
        }
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
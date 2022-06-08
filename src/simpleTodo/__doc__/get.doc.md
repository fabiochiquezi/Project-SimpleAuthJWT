<style>
    .color-yellow{
        color:  #fcf75e;
    }

    .divider{
        width: 100%;
        height: 1px;
        background: #fff;
        margin-top: 10px;
    }
</style>

##Request

<div class="divider"></div>
<br>
<br>

### GET:

<ol>
<li>[ ] Shoud be a public route</li>
<li>[ ] Should return all Simple ToDo</li>
<li>[ ] Test of database problem</li>
<li>[ ] Test success process</li>
</ol>

<br />

<div class="color-yellow">GET /simple-todo</div>
<br />

**Example:**

    [
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

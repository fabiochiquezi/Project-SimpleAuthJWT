##Request - <div class="color-yellow inline">DELETE</div>

<div class="divider"></div>
<br>
<br>

<div class="divider"></div>
<br>
<br>

#### Logic:

<ol>
<li>[v] Should be possible to delete a Simple ToDo</li>
<li>[v] Should give status 200.</li>
<li>[v] Should be a public route</li>
<br />
<li>[ ] Test database offline</li>
<li>[v] Test if doc exists in the database</li>
<li>[v] Test success process</li>
</ol>

<br />

#### Route:
<div class="color-yellow">DELETE /simple-todo/id</div>
<br />

#### Should receive:
<ul>
    <li><div class="color-yellow">ID | <b>String / param</b></div></li>
</ul>

#### Example:
    {
        ok: true,
        message: message,
        data: null
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
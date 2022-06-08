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

### Post:

<ol>
<li>[v] Should be possible to delete a Simple ToDo</li>
<li>[v] The status should be 200.</li>
<li>[ ] Just authenticated users can delete a Simple ToDo</li>
<li>[v] Test if exist the doc exist in the database</li>
<li>[ ] Test of database problem</li>
<li>[v] Test success process</li>
</ol>

<br />

<div class="color-yellow">DELETE /simple-todo/id</div>
<br />

The route should receive:
<ul>
    <li><div class="color-yellow">id (string | param)</div></li>
</ul>

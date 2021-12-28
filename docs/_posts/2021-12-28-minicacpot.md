---
layout: blogpost
title: "Mini-Cacpot strategy"
postdate: "2021-12-28"

postsubtitle: "Get those MGPs"
description: "Increase those chances at mini-cacpot !"

tags:
coverimage:
readtime: "5 min"
---

# Mini-Cacpot strategy

### The game

In mini-cacpot, you get a 3x3 grid of cells, with one number filled at random. Every grid is randomly generated every
time you make an attempt, up to 3 per day.
You can reveal 3 cells of your choice, and after that you have to select a line of 3 cells (horizontal, vertical or
diagonal), and the amount of the
cells will get you a prize, according to the chart below.

![Pretty simple to understand](\images\mini_cacpot_chart.png)

---

### How do I win ?

In case that wasn't obvious, you want to hit 6 as much as possible, and when not, fall back to 24 instead, or 23 in the
worst case scenario.

The idea is simple : use the number always given to you, and make a Y shape within the grid.


<div class="grid-container">
    So, if you get a grid like this :
    <table>
        <tr>
            <td>.</td>
            <td>.</td>
            <td>.</td>
        </tr>
        <tr>
            <td>.</td>
            <td style="color:Tomato;">x</td>
            <td>.</td>
        </tr>
        <tr>
            <td>.</td>
            <td>.</td>
            <td>.</td>
        </tr>
    </table>
    You would complete it this way :
    <table>
        <tr>
            <td style="color:lime;">x</td>
            <td>.</td>
            <td style="color:lime;">x</td>
        </tr>
        <tr>
            <td>.</td>
            <td style="color:lime;">x</td>
            <td>.</td>
        </tr>
        <tr>
            <td>.</td>
            <td style="color:lime;">x</td>
            <td>.</td>
        </tr>
    </table>
</div>
<br>

<div class="grid-container">
    So, if you get a grid like this :
    <table>
        <tr>
            <td>.</td>
            <td>.</td>
            <td>.</td>
        </tr>
        <tr>
            <td style="color:Tomato;">x</td>
            <td>.</td>
            <td>.</td>
        </tr>
        <tr>
            <td>.</td>
            <td>.</td>
            <td>.</td>
        </tr>
    </table>
    You would complete it this way :
    <table>
        <tr>
            <td>.</td>
            <td>.</td>
            <td style="color:lime;">x</td>
        </tr>
        <tr>
            <td style="color:lime;">x</td>
            <td style="color:lime;">x</td>
            <td>.</td>
        </tr>
        <tr>
            <td>.</td>
            <td>.</td>
            <td style="color:lime;">x</td>
        </tr>
    </table>
</div>


The orientation does not matter, what does is that you have a Y shape in the end.

## But why ?

Because that shape is the one that will give you the most visibility on the board give that your goal is to find a line
containing a specific sequence of number. Once the Y is completed, you will always have at least one number for every
possible line. In another words, you want to make impossible to make a choice where you would know no number in the
sequence.
<div class="grid-container">

<table>
    <tr>
        <td style="color:lime;">x</td>
        <td>.</td>
        <td style="color:red;">.</td>
    </tr>
    <tr>
        <td>.</td>
        <td style="color:lime;">x</td>
        <td style="color:red;">.</td>
    </tr>
    <tr>
        <td style="color:lime;">x</td>
        <td style="color:lime;">x</td>
        <td style="color:red;">.</td>
    </tr>
</table>
</div>

_Yucky, there's one line that's completely obscure to you_

---

## Final note

This is not a game you can win every time. This article barely gives you a way to make your attempts more reliable. You
may not win the first time. However, applying that technique, I usually get a jackpot at least once every 5 days, and
more often once every 2 or 3 days. It's become fairly frequent to get two jackpots in a row. Before applying that, I was
not able to get a jackpot even after weeks of daily attempts.

Happy playing ! [Let me know](/aboutme.html) if this helped you !

<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }


    table {
        border-collapse: collapse;

        border-spacing: 10px;
        border: 1px inset black;
        margin: auto;
        width: 90%;
        font-size: 1.5em;
        font-family: monospace;
        font-weight: bold;
        color: black;
        background-color: white;
        text-align: center;

    }

    table td {
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        width: 33.33%;
        position: relative;
    }

    table td:first-child {
        border-left: none;
    }

    table td:last-child {
        border-right: none;
    }
</style>
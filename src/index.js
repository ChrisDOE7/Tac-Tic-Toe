import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
body {
    font: 14 px "Century Gothic",
    Futura,
    sans - serif;
    margin: 20 px;
}

ol, ul {
    padding - left: 30 px;
}

.board - row: after {
        clear: both;
        content: "";
        display: table;
    }

    .status {
        margin - bottom: 10 px;
    }

    .square {
        background: #fff;
        border: 1 px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
}

.square:focus {
  outline: none;
}

.kbd-navigation .square:focus {
  background: # ddd;
    }

    .game {
        display: flex;
        flex - direction: row;
    }

    .game - info {
        margin - left: 20 px;
    }

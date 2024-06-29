const express = require('express');
const pessoas = require('./pessoaRoute.js');

module.exports = app => {
    app.use(
        express.json(),
        pessoas
    );
};
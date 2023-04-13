const express = require("express")
const path = require('path');
const router = express.Router()

 router.get("/",(req,res) => {
    res.sendFile(__dirname + '/views/index.html');
 })
 router.get("/contatos",(req,res) => {
    res.sendFile(__dirname + '/views/contato.html');
 })
 router.get("/produtos",(req,res) => {
    res.sendFile(__dirname + '/views/produto.html');
 })
 router.get("/catalogos",(req,res) => {
    res.sendFile(__dirname + '/views/catalogo.html');
 })

 router.get("/abertura/tipoDocx",(req,res) => {
    res.sendFile(__dirname + '/recursos/arquivo.docx');
 })
 router.get("/abertura/tipoJpeg",(req,res) => {
    res.sendFile(__dirname + '/recursos/arquivo.jpeg');
 })
 router.get("/abertura/tipoMp3",(req,res) => {
    res.sendFile(__dirname + '/recursos/arquivo.mp3');
 })
 router.get("/abertura/tipoPdf",(req,res) => {
   res.sendFile(__dirname + '/recursos/arquivo.pdf');
})

 router.get("/abertura/tipoMp4",(req,res) => {
    res.sendFile(__dirname + '/recursos/arquivo.mp4');
 })

 router.get("/abertura/tipoMd",(req,res) => {
    res.sendFile(__dirname + '/recursos/arquivo.md');
 })
 router.get("/abertura/tipoJson",(req,res) => {
    res.sendFile(__dirname + '/recursos/arquivo.json');
 })
 router.get("*",(req,res) => {
    res.sendFile(__dirname + '/views/notFound.html');
 })

const app = express()
app.use('/', router)

module.exports = app;
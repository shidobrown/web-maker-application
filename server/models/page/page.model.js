const mongoose = require("mongoose");
const Pageschema = require("./page.schema")
const PageModel = mongoose.model("pagemodel",Pageschema)
//find pages
 PageModel.findAllPagesForWebsite = (wid) => {
     return PageModel.find({websiteid:wid});
 }
 
 // create page
 PageModel.create(page) => {
     return PageModel.create (page);
 }
 
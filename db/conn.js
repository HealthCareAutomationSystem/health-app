const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://chhariavikram1:vikram1234@healthcare.dcpke.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
}).then(() => {
    console.log(`connection successfull`);
}).catch((err) => {
    console.log(`no connection`);
})
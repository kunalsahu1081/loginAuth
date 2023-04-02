const mongoose = require('mongoose');

const UserDetailSchema =  new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: String,
        password: String
    },
    {
        collection: "userInfo"
    }
)

mongoose.model("userInfo", UserDetailSchema);
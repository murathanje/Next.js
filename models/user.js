import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: "string",
        unique: [true, "Email already in use"],
        required: [true, "Email is required"]
    },
    usernames: {
        type: "string",
        required: [true, "Username already in use"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"], 
    },
    image: {
        type: "string",
    }
});

const User = models.User || model("User", userSchema);

export default User; 
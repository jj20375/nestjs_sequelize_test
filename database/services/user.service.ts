"use server";

import { revalidatePath } from "next/cache";
import UserOrm from "../models/user";
import { redirect } from "next/navigation";

export async function addUser(formData: FormData | undefined) {
    try {
        let row = await UserOrm.create({
            firstName: formData?.get("firstName"),
            lastName: "test2",
            email: "abc@gmail.com",
        });
        row = row.toJSON();
        return row;
    } catch (err) {
        console.log(err);
    }
}

import { addUser } from "@/database/services/user.service";
export default function TestPage() {
    async function addTest(formData: FormData) {
        "use server";
        console.log("abc=>", formData.get("firstName"));
        await addUser(formData);
    }
    return (
        <>
            <div className="bg-white text-red-500">
                <div>work</div>
                <form action={addTest}>
                    <input type="text" name="firstName" defaultValue={"123"} id="" />
                    <button type="submit">add</button>
                </form>
            </div>
        </>
    );
}

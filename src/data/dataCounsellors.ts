import counsel1 from "../assets/counsell/counsel1.svg";
import counsel2 from "../assets/counsell/counsel2.svg";
import counsel3 from "../assets/counsell/counsel3.svg";

export interface ICounsellor {
    name: string;
    about: string;
    img: string;
    id: number;
}


const AllCounsellors: ICounsellor[] = [
    {
        id: 0,
        name: "Councillor Cornor",
        about: "Quis quis esse magna veniam cillum labore dolor enim et est. Eu eiusmod veniam ut et fugiat mollit non veniam excepteur laborum qui labore incididunt.",
        img: counsel1,
    },
    {
        id: 1,
        name: "Councillor Maryjane",
        about: "Quis quis esse magna veniam cillum labore dolor enim et est. Eu eiusmod veniam ut et fugiat mollit non veniam excepteur laborum qui labore incididunt.",
        img: counsel2,
    },
    {
        id: 2,
        name: "Councillor Bukky",
        about: "Quis quis esse magna veniam cillum labore dolor enim et est. Eu eiusmod veniam ut et fugiat mollit non veniam excepteur laborum qui labore incididunt.",
        img: counsel3,
    },
]

export const getCounsellors = (): ICounsellor[] => {
    return AllCounsellors;
}
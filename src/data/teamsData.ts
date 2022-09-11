import Agala from "../assets/contact/agalabapics.png";
import Banji from "../assets/contact/banjipics.png";
import Bunmi from "../assets/contact/bunmipics.png";
import cisca from "../assets/contact/ciscapics.png";
import ife from "../assets/contact/ifepics.png";
import ola from "../assets/contact/olapics.png";
import tridwan from "../assets/contact/tridwanpics.png";
import will from "../assets/contact/willpics.png";

export interface IMembers {
    id: number,
    name: string,
    pos: string,
    // fLink: string,
    // tLink: string,
    // inLink: string,
    img: string,
};


const teamMembers : IMembers[] = [
    {
        id: 0,
        name: "Onifade Ifeoluwa",
        pos: "Team Lead/Design Lead",
        // fLink: "https://m.facebook.com/ifeloveth1",
        // tLink: "https://twitter.com/ifeloveth1",
        // inLink: "https://www.linkedin.com/in/onifadeifeoluwa",
        img: ife,
    },
    {
        id: 1,
        name: "Ewenla Olabanji",
        pos: "Marketing Leading",
        // fLink: "",
        // tLink: "",
        // inLink: "https://www.linkedin..com/in/olabanji-ewenla-671b511a9/",
        img: Banji,
    },
    {
        id: 2,
        name: "Amuzie Francisca",
        pos: "Product Lead",
        // fLink: "https://mobile.twitter.com/AmuzieFrancisca",
        // tLink: "",
        // inLink: "http://linkedin.com/in/francisca-amuzie-29b760194",
        img: cisca,
    },
    {
        id: 3,
        name: "Agalaba Precious",
        pos: "Team Member",
        // fLink: "",
        // tLink: "",
        // inLink: "",
        img: Agala,
    },
    {
        id: 4,
        name: "Olufisoye Olawale",
        pos: "Team Member",
        // fLink: "https://m.facebook.com/ItsOlawwale",
        // tLink: "https://twitter.com/olawalemayor",
        // inLink: "https://www.linkedin.com/in/olawale-mayor",
        img: ola,
    },
    {
        id: 5,
        name: "Tijani Ridwan",
        pos: "Enginering Leading",
        // fLink: "",
        // tLink: "https://twitter.com/iamtridwan",
        // inLink: "https://www.linkedin.com/in/tijani-ridwan-47a964163/",
        img: tridwan,
    },
    {
        id: 6,
        name: "Williams Williams",
        pos: "Team Member",
        // fLink: "",
        // tLink: "",
        // inLink: "",
        img: will,
    },
    {
        id: 7,
        name: "Bello Bunmi",
        pos: "Team Member",
        // fLink: "",
        // tLink: "",
        // inLink: "",
        img: Bunmi,
    },

]


export const getAllTeamMemebers = (): IMembers[] => {
    return teamMembers;
};
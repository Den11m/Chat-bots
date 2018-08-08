const {v4} = require('uuid');


const bots = [
    {
        id: "id_0",
        name: "Echo_bot",
        photo: "./img/echo.png",
        socketId: "socketId_0"
    },
    {
        id: "id_1",
        name: "Reverse_bot",
        photo: "./img/reverse.png",
        socketId: "socketId_1"
    },
    {
        id: "id_2",
        name: "Spam_bot",
        photo: "./img/spam.png",
        socketId: "socketId_2"
    },
    {
        id: "id_3",
        name: "Ignore_bot",
        photo: "./img/ignore.png",
        socketId: "socketId_3"
    },
];

/*
*	createUser
*	Creates a user.
*	@prop id {string}
*	@prop name {string}
*	@param {object} 
*		name {string}
*/
const createUser = ({name = "", photo = "https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg",socketId = null} = {})=>(
	{
		id:v4(),
		name,
		photo,
		socketId
	}
);

/*
*	createMessage
*	Creates a messages object.
* 	@prop id {string}
* 	@prop time {Date} the time in 24hr format i.e. 14:22
* 	@prop message {string} actual string message
* 	@prop sender {string} sender of the message
*	@param {object} 
*		message {string}
*		sender {string}
*/
const createMessage = ({message = "", sender = ""} = { })=>(
		{
			id:v4(),
			time:getTime(new Date(Date.now())),
			message,
			sender	
		}

	);

/*
*	createChat
*	Creates a Chat object
* 	@prop id {string}
* 	@prop name {string}
* 	@prop messages {Array.Message}
* 	@prop users {Array.string}
* 	@prop typingUsers {Array.string}
* 	@prop isCommunity {boolean}
*	@param {object}
*		messages {Array.Message}
*		name {string}
*		users {Array.string}
* 
*/
const createChat = ({messages = [], name = "", photo = "./img/community.jpg", users = [], isCommunity = false} = {})=>(
	{
		id:v4(),
		name: name ? name : createChatNameFromUsers(users),
		messages,
		users,
		photo,
		typingUsers:[],
        isCommunity
	}
);
/*
createChatNameFromUsers
@param users {Array.string}
@param excludeUser {string} user to exclude from lost of names
@return {string} users names concatenated by a '&' or 'Empty Chat' if no users
*/
const createChatNameFromUsers = (users, excludedUser = "") => {
    return users.filter(u => u !== excludedUser).join(' & ') || "Empty Chat"
};

/*
*	@param date {Date}
*	@return a string represented in 24hr time i.e. '11:30', '19:30'
*/
const getTime = (date)=>{
	return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
};

module.exports = {
	createMessage,
	createChat,
	createUser,
    createChatNameFromUsers,
	bots
};
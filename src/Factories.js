const {v4} = require('uuid');


const bots = {
    "Echo_bot": {
        id: "id_0",
        name: "Echo_bot",
        //photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwRu3EhQGRTZl1ijtlBB9oWlx1ZqBcfjg7gwWN07QG36mJEdH",
        photo: "./img/echo_bot.png",
        socketId: "socketId_0"
    },
    "Reverse_bot": {
        id: "id_1",
        name: "Reverse_bot",
        //photo: "https://images.discordapp.net/avatars/419724462716354560/91e19157ba7358c90512139273e47d7b.png?size=512",
        photo: "./img/reverse_bot.png",
        socketId: "socketId_1"
    },
    "Spam_bot": {
        id: "id_2",
        name: "Spam_bot",
        //photo: "https://cdn0.iconfinder.com/data/icons/robot-avatars-solid/60/040_-_Question_Bot-512.png",
        photo: "./img/spam_bot.png",
        socketId: "socketId_2"
    },
    "Ignore_bot": {
        id: "id_3",
        name: "Ignore_bot",
        //photo: "https://images.discordapp.net/avatars/236884221182869504/f956d9d74a7730867e4ba9aba30118f4.png?size=512",
        photo: "./img/ignore_bot.png",
        socketId: "socketId_3"
    },
    };

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
const createChat = ({
                        messages = [],
                        name = "",
                        photo = "https://previews.123rf.com/images/ikopylov/ikopylov1405/ikopylov140500031/28462753-seamless-pattern-with-various-avatar-faces-in-social-network-community-vector-illustration-.jpg",
                        users = [],
                        isCommunity = false
} = {})=>(
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

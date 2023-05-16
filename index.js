function shout(string)
{
    if (string == undefined || string == null || string.length < 1) return "";
    else return string.toString().normalize().toUpperCase();
}

function whisper(string)
{
    if (string == undefined || string == null || string.length < 1) return "";
    else return string.toString().normalize().toLowerCase();
}

function logShout(string)
{
    console.log(shout(string));
}

function logWhisper(string)
{
    console.log(whisper(string));
}

function isUpperCase(string)
{
    if (string == undefined || string == null || string.length < 1) return true;
    else
    {
        if (string.toUpperCase().valueOf() === string) return true;
        else return false;
    }
}

function isLowerCase(string)
{
    if (string == undefined || string == null || string.length < 1) return true;
    else
    {
        if (string.toLowerCase().valueOf() === string) return true;
        else return false;
    }
}

function sayHiToHeadphonedRoommate(string)
{
    //if string is lower-case returns I can't hear you!
    //if string is upper-case returns YES INDEED!
    //if the string is equal to Let's have dinner together! return I would love to!
    if (string == undefined || string == null || string.length < 1) return "";
    //else;//do nothing

    //if it is lets have dinnner first
    if (string === "Let's have dinner together!")
    {
        return "I would love to!";
    }
    else
    {
        let uppercase = true;
        let lowercase = true;
        for (var i = 0; i < string.length; i++)
        {
            if (isUpperCase(string.charAt(i)));
            else
            {
                //string is not uppercase
                uppercase = false;
                break;
            }
        }

        for (var i = 0; i < string.length; i++)
        {
            if (isLowerCase(string.charAt(i)));
            else
            {
                //not all lower case
                lowercase = false;
                break;
            }
        }

        if (uppercase && lowercase)
        {
            throw "they cannot be both upper and lower case!";
        }
        else
        {
            if (lowercase) return "I can't hear you!";
            else if (uppercase) return "YES INDEED!";
            else return "";
        }
    }
}
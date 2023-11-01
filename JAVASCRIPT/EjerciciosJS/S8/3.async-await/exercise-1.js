const runTimeOut = async () => {
    try {
        await setTimeout(function () {
            console.log("Time out!")
        }, 2000) 
    }
    catch (error) {
        console.log(error);
    }
};

runTimeOut();
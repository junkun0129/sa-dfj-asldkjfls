export default function j(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    const a=[
    "youkai1",
    "youkai2",
    "youkai3",
    "youkai4",
    "youkai5",
    "youkai6",
    "youkai7",
    "youkai8",
    "youkai9",
    "youkai10",
    "youkai11",
    "youkai12",
    "youkai13",
    "youkai14",
    "youkai15"
    ]
    //const q=[{name: "jumi", number: 55555, type:"kure"}, {name: "yuko", number: 11111, type:"iwelsk"}]
    console.log("unko");
   
    // console.log(body.JSON.stringify(data))
    response.status(200).json({
        //a:request.body
        //q:request.body
        a
        
    })


    
}
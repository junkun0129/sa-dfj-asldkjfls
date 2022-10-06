export default function j(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    const a=[
    {name: "岩谷　淳平", email: "penpenetai@icloud.com", password: "iwatani0524", point: "22", avatar: "../youkai/youkai10.png"}, 
    {name: "岩谷　あん", email: "an@icloud.com", password: "an1919", point: "55", avatar: "../youkai/youkai9.png"},
    {name: "岩谷　ゆうこ", email: "yuko@icloud.com", password: "4545", point: "77", avatar: "../youkai/youkai8.png"}
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
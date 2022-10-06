export default function j(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    const stationary=[
    {name: "湯本豪一コレクション関連書籍", price: 2000, detail: "本館に関連する妖怪、物の怪に関する書籍。", picture: "../youkai/notes.jpg"},
    {name: "バケコモノオバケノート", price: 300, detail: "手書き風のもののけたちが描かれたノート。", picture: "../youkai/normal-note.jpg"},
    {name: "宇河クリアファイル", price: 250, detail: "宇河とコラボしたクリアファイル", picture: "../youkai/anime-files.jpg"},
    {name: "オリジナルクリアファイル", price: 250, detail: "本館オリジナルキャラが描かれたクリアファイル。", picture: "../youkai/clear-files.jpg"},
    {name: "一筆箋", price: 1000, detail: "各もののけがプリントされた、封筒。", picture: "../youkai/hissen.jpg"},
    {name: "其の先一筆箋・封筒　百鬼夜行", price: 1500, detail: "水墨画長のもののけが描かれた。", picture: "../youkai/letters.jpg"},
    {name: "オリジナルポストカード", price: 1000, detail: "さまざまなもののけが描かれたポストカード", picture: "../youkai/post-card.jpg"},
    {name: "マスキングテープ", price: 450, detail: "様々な物の怪が描かれたマスキングテープ", picture: "../youkai/tapes.jpg"} 
    ]
    //const q=[{name: "jumi", number: 55555, type:"kure"}, {name: "yuko", number: 11111, type:"iwelsk"}]
    console.log("unko");
   
    // console.log(body.JSON.stringify(data))
    response.status(200).json({
        //a:request.body
        //q:request.body
        stationary
        
    })


    
}
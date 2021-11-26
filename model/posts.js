module.exports = {

    posts: [
        {id:'tjazh6hpz',
        title:'Teste Title',
        descript:'Descrição teste'},
        ],

    getAll(){
        return this.posts
    },

    newPost(title,descript){
        this.posts.push({id: generateId(),title,descript})
    },

    delPost(id){
        
    }


}

function generateId(){
    return Math.random().toString(36).substr(2,9)
}

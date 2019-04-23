// Callbacks

// Mimic blog-posts

const posts = [
    {
    title: 'Post One',
    body: 'This is post One'
    },
    {
    title: 'Post Two',
    body: 'This is post Two'
    }
]

function getPost(){
    setTimeout(() => {
        let output =''
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output
    }, 1000)
}

getPost()

function createPost(post, callback){ 
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

getPost()

createPost({ title: 'Post Three', body: 'This is post Three'}, getPost)
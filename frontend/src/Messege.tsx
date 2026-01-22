//note to self: React nerds want PascalCase RIP to Pascal_Snake_Cases

function Message(){
    //JSX 
    const name = 'Vincent';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;
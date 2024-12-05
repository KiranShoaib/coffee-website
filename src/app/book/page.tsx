function Book(){
    return(
        <section className="book" id="book">
            <h1 className="heading">booking <span>reserve a table</span></h1>
            <form action={""}>
                <input type="text" placeholder="your name" className="box"/>
                <input type="email" placeholder="your email" className="box"/>
                <input type="tel" placeholder="your number" className="box"/>
                <textarea name="" placeholder="your message" className="box" id="" cols={30} rows={10}></textarea>
                <input type="submit" value="send message" className="btn"/>
                
            </form>

        </section>
    )
}

export default Book
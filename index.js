function showQuote(){
    var d = Math.random();
    var c = Math.floor(d*10-1);
 // alert(c);
    if(c == 1){
        document.getElementsByClassName('paragraph')[0].innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quis hic dolorem reprehenderit laudantium, facilis dicta a minus tempora eos. Eaque, saepe! Eveniet cumque ipsam perspiciatis, recusandae quo sit nemo."
    }
    else if( c == 2){
        document.getElementsByClassName('paragraph')[0].innerHTML = "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.";
    }
    else if(c == 3){
        document.getElementsByClassName('paragraph')[0].innerHTML = "In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph.";
    }
    else if(c == 4){
        document.getElementsByClassName('paragraph')[0].innerHTML = "For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. ";
    }
    else if( c == 5){
        document.getElementsByClassName('paragraph')[0].innerHTML = "Before you can begin to determine what the composition of a particular paragraph will be";
    }
    else if (c == 6){
        document.getElementsByClassName('paragraph')[0].innerHTML = "What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent ";
    }
    else if( c == 7){
        document.getElementsByClassName('paragraph')[0].innerHTML = "A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct,";
    }
    else if ( c == 8){
        document.getElementsByClassName('paragraph')[0].innerHTML = "The decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming. There are many techniques for brainstorming";
    }
    else if(c == 9){
        document.getElementsByClassName('paragraph')[0].innerHTML = "Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation";
    }
    else if(c == 0){
        document.getElementsByClassName('paragraph')[0].innerHTML = "There are many different ways to organize a paragraph.";
    }

}
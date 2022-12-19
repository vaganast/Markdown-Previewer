import { useState } from 'react'
import { marked } from 'marked'

function App() {
  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!

    # H1
    ## H2
    [title](https://www.example.com)
    \`code\`
    \`\`\`
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
    \`\`\`

    - First item
    - Second item
    - Third item

    > blockquote

    ![alt text](image.jpg)

    **bold text**

  `)

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <h3>Editor</h3>
      <textarea 
        className='textarea'
        id='editor' 
        onChange={(e) => {setText(e.target.value)}}
        value={text}
      ></textarea>
      <h3>Previewer</h3>
      <div 
        className='preview'
        id='preview'
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  )
}

export default App

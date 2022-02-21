import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Title from './Components/Title';
import Form from './Components/Form';
import Input from "./Components/Input";
import TextArea from "./Components/TextArea";
import React from "react";
import Label from "./Components/Label";
import Button from "./Components/Button";
import Editor from "@monaco-editor/react";


function App() {


    const templateSetter = (value, event) => {
        setUserTemplate(value);
    }
    const testSetter = (value, event) => {
        setTest(value);
    }
    const [test, setTest] = React.useState('// Include all test that will be ran to check if user function is correct');
    const [userTemplate, setUserTemplate] = React.useState('// Function that will be presented to the user');


    return (
        <div className="App">
            <Header>
                <Title
                    main={'Gethired'}
                    sub={' Challenges Creator'}
                />
            </Header>
            <Main>
                <Form
                    action='http://localhost:8000/api/v1/challenges'
                    method='post'>
                    <Input
                        name='name'
                        attrs={{
                            placeholder: 'Super sum...',
                            required: true,
                            type: 'text',
                            minLength: 3,
                            maxLength: 50
                        }}
                    />
                    <Input
                        name='time_out'
                        attrs={{
                            placeholder: 'Timeout in minutes',
                            required: true,
                            type: 'number',
                            min: 10,
                            max: 100
                        }}/>
                    <TextArea
                        name='description'
                        attrs={
                            {
                                placeholder: 'Create a super sum!',
                                required: true,
                                type: 'text',
                                minLength: 10,
                                maxLength: 200
                            }
                        }
                    />
                    <div className='input-container'>
                        <Label name='difficulty'/>
                        <select name="difficulty" className='bg-primary-light  text-center input w-3/4' id="difficulty">
                            <option className='option' value="low">Low</option>
                            <option className='option' value="medium">Medium</option>
                            <option className='option' value="high">High</option>
                        </select>
                    </div>
                    <div>
                        <Label name='user_template'/>
                        <Editor
                            className='rounded-md overflow-hidden'
                            height="50vh"
                            defaultLanguage="javascript"
                            defaultValue={userTemplate}
                            theme={'vs-dark'}
                            onChange={templateSetter}
                        />
                    </div>
                    <div>
                        <Label name='tests'/>
                        <Editor
                            className='rounded-md overflow-hidden'
                            height="50vh"
                            defaultLanguage="javascript"
                            defaultValue={test}
                            theme={'vs-dark'}
                            onChange={testSetter}
                        />
                    </div>
                    <Input
                        name='token'
                        attrs={{
                            type: 'password',
                            required: true,
                            placeholder: 'Token provided by the captain run'
                        }}
                    />

                    <div className='md:w-1/2 w-full mx-auto'>
                        <Button>
                            <Input attrs={{
                                type: 'submit',
                            }}/>
                        </Button>
                    </div>
                    <input type="hidden" name='user_template' value={userTemplate}/>
                    <input type="hidden" name='test_template' value={test}/>
                </Form>
            </Main>
        </div>
    );
}

export default App;

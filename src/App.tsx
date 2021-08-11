import React from 'react';

function App() {

  const [id, setId] = React.useState('');

  const key: string = '3B379C7D4F5B3E019F6D2CE93C2F0DFD';

  function findUser(id: string):any {
    return fetch('http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=3B379C7D4F5B3E019F6D2CE93C2F0DFD&steamid=76561198300585294&format=json')
      .then((user) => {
        console.log(user);
        return user
      })
      .catch((err) => console.log(err))
  }

  function handleChange(e: any) {
    setId(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    
    findUser(id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={id} />
          <button className="submit-button" type="submit">Find</button>
        </form>
      </header>
      <main className="content">

      </main>
    </div>
  );
}

export default App;

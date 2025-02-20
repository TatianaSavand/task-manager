// function SearchBar({searchTask}) {
//   const [search, setSearch] = useState('');
//
//   function handleSearch(event) {
//     setSearch(event.target.value);
//   }
//
//   function onSubmit(event) {
//     searchTask(event, search.trimStart());
//   }
//
//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" name="serch" value={search} onChange={handleSearch} placeholder="Serch"/>
//       <button type="submit">SEARCH</button>
//     </form>
//   )
// }
//
// export default SearchBar;
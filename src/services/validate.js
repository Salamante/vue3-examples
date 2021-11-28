export default (function testing(elem) {
      let arr = [];
      for(let i = 0; i <= elem.length ; i++) {
      arr.push(elem.split("")[i]);
      };
      return arr
})("testtext")
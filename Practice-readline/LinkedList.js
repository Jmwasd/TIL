const readline = require("readline");
// 링크드 리스트 vs 배열
//                 데이터 검색                         데이터 삽입
// 링크드 리스트 : 특정 인덱스가 없다 => O(n)                 O(1)
//     배열    : 특정 인덱스값만 알고 있다면 =>O(1)   다음 요소들의 위치 변경 =>O(n)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addToTail(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      // head와 tail와 newNode는 동일한 주소값 공유 (1)
      // 즉, tail의 값이 변경되면 head값과 newNode값도 같이 변경 (1)
    } else {
      this.tail.next = newNode;
      //head와 tail은 같은 주소값을 공유하고 있기 때문에 (2)
      //tail값이 변경되면 head값도 변경 (2)
      //즉, tail.next가 변경되면 head.next도 변경된다. (2)
      this.tail = newNode;
      //tail.next 와 tail이 같은 주소값 공유 (2)
      //즉 head.next와 tail이 같은 조소값을 공유하게 된다. (2)

      // (2)를 넣었을 떄와 마찬가지로 (3)을 넣게 된다면 (3)
      // head.next와 tail이 공유하고있기 때문에 (3)
      // tail.next의 값이 변경되면 head.next.next의 값이 변경된다. (3)
      // 마지막으로 head.next.next와 tail이 같은 주소값 공유 (3)
    }
    this._size++;
  }

  remove(value) {
    let index = this.indexOf(value);

    if (index === -1) {
      return -1;
    }

    if (index === 0) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this._size--;
      }
    }

    let prevNode = this.getNodeAt(index - 1);
    let removedNode = this.getNodeAt(index);

    if (removedNode === this.tail) {
      prevNode.next = null;
      this.tail = prevNode;
      this._size--;
    }
  }

  getNodeAt(index) {
    let cnt = 0;

    let currentNode = this.head;

    if (index === cnt) {
      return currentNode.value;
    }
    while (currentNode.next) {
      cnt++;
      currentNode = currentNode.next;
      if (index === cnt) {
        return currentNode;
      }
    }
    return -1;
  }

  indexOf(value) {
    let currntNode = this.head;
    let index = 0;
    while (currntNode) {
      if (currntNode.value === value) {
        return index;
      }
      currntNode = currntNode.next;
      index++;
    }
    return -1;
  }

  size() {
    return this._size;
  }
}

// let test = new LinkedList();

// test.addToTail(5);
// test.addToTail(6);
// test.addToTail(7);
// test.addToTail(8);
// test.addToTail(9);
// test.addToTail(10);

// console.log(test.remove(5));
// console.log(test);

// rl.question(
//   "값 추가 : insert, 값 삭제 : delete, 특정 노드 조회 : getNodeAt, 모든 노드 조회 : getAll, 프로그램 종료 : exist \n 아무거나 누르면 시작됩니다. ",
//   (press) => {
//     console.log(press);
//   }
// );

// function insert(value) {
//   test.addToTail(value);
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (answer) => {
//   console.log(
//     "1. 값 추가 : insert, 2. 값 삭제 : delete, 3. 특정 노드 조회 : getNodeAt, 4. 모든 노드 조회 : getAll, 5. 프로그램 종료 : exist"
//   );
//   if (answer === "1") {

//   } else {
//     rl.close();
//   }
// });

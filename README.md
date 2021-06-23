<details>
<summary> 😎 4/22 Today I Learn
</summary>
<div markdown="1">       
<hr/>

## 오늘 학습 내용

- nodejs vs spring boot
- 독서 - 소프트 스킬
- 프로그래머스 mysql-level 4 => 1문제
- 타입스크립트 - 함수

## 프레임 워크 vs 라이브 러리
내가 코드를 컨트롤 => 라이브러리 ex ) jQuery

누군가의 규칙을 따라 코딩 => 프레임 워크 ex) django , spring boot

프레임워크 또는 라이브러리라는 용어로 정의하기 애매한 것들도 존재한다. 
예를들어 리액트같은 경우 라이브러리로 공식문서에 적혀있지만 컴포넌트별로 규칙이 존재하기 때문에 프레임 워크라러도 불릴 수 있다.

## Node JS vs Spring boot

**Node.js** : 브라우저 외부에서 Javascipt 코드를 실행하는 데 사용되는 런타임 환경. 프레임 워크가 아니다.

**Spring boot(프레임 워크)** : 자바기반 런타임 환경

Node.js 와 Spring boot의 정확한 비교를 위해 express.js vs spring boot 또는 Koa vs Spring boot 등이 맞지만 범위를 넓혀 Node.js를 사용할 것.(express, koa는 node.js를 위한 프레임 워크)

### 회사별 사용 기술
Node.js => Medium / Netflix / Uber / LinkedIn …

Spring Boot => Google / Microsoft / Amazon ….

### 주요 특징
**Node.js** : event-driven, single-threaded, non-blocking I/O model
#### 장점

- 자바스크립트 커뮤니티가 빠르게 성장중
- 가볍고 빠르다.
- 싱글 쓰레드 => 적은 메모리 공간을 차지
- I / O 작업에 적합
- Npm의 지속적인 성장

#### 단점

- Multi-threading을 지원하지 않는다 => 프로세스가 죽으면 대체할 프로세스가 없다.
- 정적 타입 체크의 부족 => 런타임환경에서 문제가 될 수 있다.
- 대용량 컴퓨팅 작업에 적합하지 않다 => 병목현상

**Spring Boot** : 프로덕션 등급의 독립적 애플리케이션을 빠르게 실행 가능 / 라이브러리 버젼 자동 관리 / multi-threaded
#### 장점

- 자바의 커뮤티니는 이미 성장해있다.
- 정적 타입 언어(타입의 안전성)
- 멀티 쓰레드
- 쉽게 사용 가능한 수 많은 의존성
- 유지 보수성과 안정성이 뛰어남
#### 단점

- 많은 메모리 공간을 차지
- 반복적으로 비슷한 형태를 띄는 코드(boilerplate code)는 디버깅을 어렵게할 수 있다.
- 사용되지 않는 종속성을 포함할 수 있다.

### 상황에 따른 선택
**Node.js** : I / O에 의존하는 애플리케이션(예약시스템, 미디어 앱)을 구축하는 경우 사용

**Spring Boot** : 엄청난 양의 컴퓨팅(빅 데이터, 전자 상거래 플랫폼)을 수행해야 할 때 사용

<hr/>

### 참고 자료
https://betterprogramming.pub/node-js-vs-spring-boot-which-should-you-choose-2366c2f76587

https://www.youtube.com/watch?v=5DxMUShYHW8&t

https://www.youtube.com/watch?v=t9ccIykXTCM&t

### 원본
https://velog.io/@aksdb9865
</div>
</details>

<details>
<summary> 😎 4/26 Today I Learn
</summary>
<div markdown="1"> 

<hr />

## 오늘 학습 내용
- 타입스크립트 - 리터럴 타입 / 유니언과 교차 타입
- this
- React hooks(벨로퍼트 리액트 입문 17장 까지)
- 독서 - 소프트 스킬(존 손메즈)

## This

this에 바인딩될 객체는 자바스크립트 엔진에 의해 함수 호출 패턴에 의해 결정.

### 메서드 호출
```javascript
let obj = {
	name : "jang",
	sayName : function(){
		console.log(this.name)
	}
}

console.log(obj.sayName()); //  jang
```
### 화살표 함수를 이용한 호출

화살표 함수는 함수를 호출 된 곳이 아니라 함수가 생성된 쪽에서 this가 바인딩

```javascript
let obj = {
	name : "jang",
	sayName : function(){
		return ()=>{
			console.log(this) // {name : “jang” , sayName : f~}
		}
	}
}

console.log(obj.sayName()()); // {name:"jang", sayName : f}
```

### 일반 함수 호출

this는 전역 객체에 바인딩 

```javascript
function Person(name){
  	this.name = name
}
let me = Person("jang");
console.log(me) // undefined

```

### new 연산자를 붙여 호출

this는 해당함수에 바인딩

```javascript
function Person(name){
  this.name = name
}
let me =new Person("jang");
console.log(me) // Person {name : "jang"}
```
### 원본
https://velog.io/@aksdb9865


</div>
</details>

<details>
<summary> 😎 21/6/16 Today I Learn
</summary>
<div markdown="1"> 

<hr />

# form tag

## label element의 중요성

1. 사용자가 input tag에 값을 입력하기 위해 집중할 때 화면 판독기가 해당 input tag의 라벨을 소리내어 읽어준다.
2. checkbox/radio button은 종종 너무 작아 클릭하기 어려울 때가 종종 발생하는데 label element로 label을 클릭했을 때도 checkbox/radio button이 toggle되게 도와준다.
3. label tag의 for속성은 반드시 input tag와의 id 속성과 일치해야 함께 바인딩 된다.

## Form tag의 submit속성
1. action : Method속성 에따라 방식이 다르지만 method속성이 없다면 action값에 적힌 url로 이동되고 파라미터에 input data가 나타난다. (기본값은 method=“get”)
2. target : target속성이 없다면 해당 페이지에서 페이지 전환이 이루어지고 _blank로 값을 준다면 새로운 탭으로 이동하게 된다. 더 자세하게 학습해야 된다면 [여기](https://www.w3schools.com/html/html_forms_attributes.asp)를 클릭해 보자
3. method : get 방식은 action에서 설명한 것과 동일하게 동작하고 추가적으로 method는 말 그대로 HTTP method를 지정할 수 있다. data를 어떤 형태로 보내줄것인지를 결정하고자 할 때 사용한다. Post 방식을 사용하면 console network 탭에서 입력한 값을 확인할 수 있다.
4. autocomplete : on으로 값을 할당하면 자동완성기능 활성화 off 는 비활성화
5. novalidate :  유효성 검사를 여부를 확인해주는 속성 값은 boolean으로 할당 시켜준다

## form tag 안에 사용할 수 있는 element 종류
```javascript
<input>
<label>
<select>
<textarea>
<button>
<fieldset>
<legend>
<datalist>
<output>
<option>
<optgroup>

```

## 참고자료
	
https://www.w3schools.com/html/html_forms.asp<br/>
https://www.w3schools.com/html/html_forms_attributes.asp<br/>
https://www.w3schools.com/html/html_form_elements.asp<br/>
https://www.nextree.co.kr/p8428/<br/>
</div>
</details>

	
	
<details>
<summary> 😎 21/6/17 6월안에 네트워크 숟가락 들기 (TCP/IP)
</summary>
<div markdown="1"> 

<hr />

# TCP/IP

TCP/IP는 두 개의 프로토콜로 이루어져 있다

IP(인터넷 프로토콜) : 복잡한 네트워크의 작은 조각들을 빨리 보내는 역할

네트워크를 작은 조각으로 나눠 보내는 이유 : 어떤 패킷을 보낼 때 중간에 연결이 끊어지게 된다면 다시 연결해야 되기 때문에 효율적인 방법이 아니다.

TCP(전송 제어 프로토콜) : 패킷을 잘게 잘라 보내게 되면 순서가 맞지 않거나 중간에 빠질 가능성이 있기 때문에 다시 요청하는 역할을 해준다.
	
### 용어
SYN : 연결 요청 플래그<br/>
ACK : 보낸 패킷에 대한 성공 여부를 판단해서 응답<br/>
플래그 : 프로그래밍 언어 용어로서, 특정 동작을 수행할지 말지 결정하는 (보통 1비트인) 변수
	
## TCP의 작동 방식

 <strong>3-way handshake</strong> 방식으로 송신자와 수신자를 연결시켜 통신을 시작하고
 <strong>4-way handshake</strong> 방식으로 통신을 종료


- 3-way handshake : 연결 초기화
    - 클라이언트가 서버에게 ‘STN’을 보내 통신 여부 확인
    - 클라이언트는 ‘SYN/ACK’를 서버에게 보내 통신할 준비가 되었음을 알림
    - 클라이언트는 ‘ACK’를 보내 전송을 시작함을 알림 이후 데이터를 주고 받을 수 있게된다.
- 4 way handshake : 연결 종료
    - 클라이언트가 서버에게 연결 종료하겠다는 FIN플래그 전송
    - 서버 FIN플래그를 받고 클라이언트에게 ACK를 보내 통신이 끝날 때까지 대기
    - 통신이 모두 끝나면 서버는 클라이언트에게 FIN플래그를 전송
    - 클라이언트는 통신 종료가 되었다는 ACK를 서버에게 전송

## TCP 특징
	
- 흐름 제어 : TCP Header 내의 window size를 사용해 데이터의 양을 결정
- 혼잡 제어 : 클라이어트와 서버 사이 경로들의 혼잡도를 확인해서 현재 네트워크에 가장 적합한 데이터량을 확인

## 정리
- TCP/IP는 하나의 프로토콜 아닌 두 개의 프로토콜을 합쳐 부르는 용어.
- IP주소를 사용하여 패킷 전달
- TCP로 패킷 값을 확인(순서 확인, 빠진 부분 확인 등)

## 참고자료
	
https://mindgear.tistory.com/206<br/>
https://aws-hyoh.tistory.com/entry/TCPIP-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0<br/>
https://brunch.co.kr/@wangho/12<br/>
https://bangu4.tistory.com/74<br/>
https://namu.wiki/w/%ED%94%8C%EB%9E%98%EA%B7%B8
</div>
</details>
	
<details>
<summary> 😎 21/6/21 6월안에 네트워크 숟가락 들기 (OSI 7 Layer)
</summary>
<div markdown="1"> 

# intro
	
만약 이 글을 보신다면 읽지마시고 아래 참고 자료에있는 유튜브를 시청보시는걸 100배 1000배 추천합니다.
	
	
# 1계층-물리계층(Physical layer)

0과 1의 나열을 아날로그 신호로 바꾸어 전선으로 흘려 보내고(encoding),
아날로그 신호가 들어오면 0과 1의 나열로 해석하여(decoding) 물리적으로 연결된 두 대의 컴퓨터가 0과 1의 나열을 주고받을 수 있게 해주는 모듈(module)
주로 하드웨어적으로 구현
![0101_0101](https://user-images.githubusercontent.com/66477332/122772841-bf5e4400-d2e2-11eb-9b0a-abff6524b598.png)

# 2계층(Data Link layer)

같은 네트워크에 있는(스위치 하나로 연결 되어 있는 것들) 여러 대의 컴퓨터들이 데이터를 주고받기 위해서 필요한 모듈

Framing 은 Data-link layer 에 속하는 작업들 중 하나이다.

Framing : 원본 데이터값들을 다른 데이터와 구분짓게 해주는 일종의 구분자 역할을 하는 프레임

예를들어 컴퓨터1 , 컴퓨터2 가 컴퓨터 3에게 각자 1101, 1001데이터를 동시에 보낼 때 컴퓨터 3은

11011001과 같이 데이터가 들어온다면 누구의 데이터인지 알 수 없기 때문에 Framing을 통해 어디서 온 데이터인지 알 수 있다.

Ex)

1111 : 시작, 0000 :끝

1111`1101`00001111`1001`0000
![_2021-05-03__7 46 54](https://user-images.githubusercontent.com/66477332/122773090-fe8c9500-d2e2-11eb-8740-3f6bb0f7492c.png)<br/>
1계층 + 2계층<br/>

![1111_(data_0000](https://user-images.githubusercontent.com/66477332/122773221-1fed8100-d2e3-11eb-9d8b-199d46a57ea1.png)<br />
주로 하드웨어적으로 구현
# 3계층(Network layer) 
수많은 네트워크들의 연결로 이루어지는 inter-network속에서 어딘가에 있는 목적지 컴퓨터로 데이터를 전송하기 위해, IP주소를 이용해서 길을 찾고(routing) 자신 다음의 라우터에게 데이터를 넘겨주는 것(forwarding : 마 - > 바)

주로 운영체제의 커널에 소프트웨어적으로 구현되어 있다.

![55 10 54 75](https://user-images.githubusercontent.com/66477332/122773713-8a062600-d2e3-11eb-9eb5-006dad078aa1.png)

1 계층 + 2 계층 + 3 계층
![1115_decoder](https://user-images.githubusercontent.com/66477332/122773752-90949d80-d2e3-11eb-9765-be4a19679706.png)

	
# 4계층(Transport layer)
Port 번호를 사용하여 도착지 컴퓨터의 최종 목적지인 프로세스에 까지 데이터가 도달하게 하는 모듈
Port 번호 : 하나의 컴퓨터에서 동시에 실행되고 있는 프로세스들이 서로 겹치지 않게 가져야하는 정수 값

![Transport_Layer](https://user-images.githubusercontent.com/66477332/122773982-c5a0f000-d2e3-11eb-9c77-09206abaf2e9.png)<br/>
1-2 계층 + 3 계층 + 4 계층<br/>
![_2021-05-03__8 11 58](https://user-images.githubusercontent.com/66477332/122774000-c9347700-d2e3-11eb-9987-955f96d0ad28.png)<br />
	
오늘날 OSI 모델보다 TCP/IP업그레이드 모델이 더 많이 사용되기 때문에 5,6계층은 따로 설명 x<br/>
![TCPP_Model](https://user-images.githubusercontent.com/66477332/122774436-23cdd300-d2e4-11eb-8aec-6006a1fb6f58.png)<br/>
	
	
# 7계층 (Application layer)
TCP/IP 소켓 프로그래밍 - 운영체제의 Transport layer에서 제공하는 API를 활용해서 통신 가능한 프로그램을 만드는 것을 TCP/IP 소켓 프로그래밍 또는 네트워크 프로그래밍 이라고 한다.

소켓 프로그래밍 만으로도 클라이언트, 서버 프로그램을 따로따로 만들어서 동작 시킬 수 있다.

뿐만 아니라, TCP/IP 소켓 프로그래밍을 통해서 누구나 자신만의 Application layer 인코더와 디코더를 만들 수 있다.

즉, 누구든 자신만의 Application layer 프로토콜을 만들어서 사용할 수 있다는 뜻이다.<br />
![HTTP_encoder](https://user-images.githubusercontent.com/66477332/122774543-3ba55700-d2e4-11eb-8b47-b53aec3fc58d.png)

## 참고자료
https://www.youtube.com/watch?v=1pfTxp25MA8
</div>
</details>
	
<details>
<summary> 😎 21/6/22 6월안에 네트워크 숟가락 들기 (ARP)
</summary>
<div markdown="1"> 

<hr />

# ARP 간단 요약 
	
IP주소를 이용해 MAC주소를 알아오게 해주는 프로토콜

# 용어

**IP 주소** : 실질적인 주소를 나타내며 목적지까지의 방향을 알려준다.<br/>
**MAC 주소** : 목적지의 이름

**게이트웨이** : 서로 다른 네트워크 간의 통로의 역할을 하는 장치 주로 라우터 장비를 사용하며, 일반적인 장비들은 특정 패킷을 받았을 때 자신의 패킷아 아니면 허용하지 않는것에 비해 게이트웨이는 테이블을 확인하여 가장 적합한 네트워크로 전달해주는 역할.

**브로드 캐스트** : 같은 네트워크 대역대에 있는 모든 단말기들에게 자신의 MAC주소 또는 패킷을 보내는 방식 주소는 FFFF.FFFF.FFFF(MAC adrress일 경우)를 사용. 다른 라우터의 정보를 찾을 때 사용, ARP와 같은 개념이라 생각하자 일단. <br/>
브로드 캐스트를 많이 사용할 경우 모든 단말기들에게 요청을 보내기 때문에 성능이 떨어진다는 단점이 있음.

	
# 통신 과정

 
1. 같은 네트워크에 있는 단말기 간의 통신- 예) 단말기 A와 단말기 B통신 과정
    1. A는 B의 MAC 주소를 모르기 때문에 브로드캐스트 방식으로 B의 IP주소를 가진 단말기가 있는지 요청(네트워크 스위치는 A의 MAC주소가 없다면 테이블에 저장)
    2. 네트워크 스위치 장비에 B의 MAC주소가 저장되어 있다면 A에게 B의 주소를 알려준다.
    3. 네트워크 스위치 장비에 B의 MAC주소가 저장되어 있지 않다면 B에게 MAC주소값을 달라는 요청을 보낸다.
    4. B는 요청을 받은 후 자신의 MAC주소를 응답으로 알려준다.
    5. 네트워크 스위치는 B의 MAC주소를 테이블에 저장 후 A에게 B의 MAC주소를 전달
    6. A는 B의 MAC주소를 전달 받았으니 A와 B의 통신 가능


2. 같은 네트워크에 없을 때 - 예) 단말기 A와 단말기 B통신 과정
같은 네트워크에 없을 땐 네트워크간의 연결 통로인 라우터를 사용.

    1. A는 B의 MAC주소를 모르기 때문에 브로드캐스트 방식으로 B의 IP주소를 가진 단말기가 있는지 요청
    2. 라우터는 A의 요청을 받아 같은 네트워크에 대역에 존재하지 않기 때문에 자신의 MAC주소로 응답
    3. A는 라우터의 MAC주소를 받아 다시 B의 주소를 라우터에게 요청
    4. 라우터는 B의 MAC주소를 모르기 때문에 연결되어있는 모든 네트워크 대역대에 브로드캐스트로 B의 MAC주소를 요청
    5. B는 자신의 MAC주소를 확인하고 해당 라우터에게 자신의 MAC주소를 응답
    6. 이 후 A와 B통신 시작

## 참고자료
	

https://zitto15.tistory.com/21 <br/>
https://www.stevenjlee.net/2020/06/07/%ec%9d%b4%ed%95%b4%ed%95%98%ea%b8%b0-arp-address-resolution-protocol-%ed%94%84%eb%a1%9c%ed%86%a0%ec%bd%9c/ <br/>
https://jhnyang.tistory.com/404 <br/>

</div>
</details>
<details>
<summary> 😎 21/6/23
 6월안에 네트워크 숟가락 들기 (인터넷 구성도)
</summary>
<div markdown="1"> 

# 인터넷 구성도

![Group 3](https://user-images.githubusercontent.com/66477332/123125103-316d8f00-d483-11eb-860a-8d5dce71a21d.png)
	
</div>
</details>

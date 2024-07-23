// start: Sidebar
document.querySelector('.chat-sidebar-profile-toggle').addEventListener('click', function (e) {
  e.preventDefault()
  this.parentElement.classList.toggle('active')
})

document.addEventListener('click', function (e) {
  if (!e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
    document.querySelector('.chat-sidebar-profile').classList.remove('active')
  }
})
// end: Sidebar

// start: Coversation
document.querySelectorAll('.conversation-item-dropdown-toggle').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    if (this.parentElement.classList.contains('active')) {
      this.parentElement.classList.remove('active')
    } else {
      document.querySelectorAll('.conversation-item-dropdown').forEach(function (i) {
        i.classList.remove('active')
      })
      this.parentElement.classList.add('active')
    }
  })
})

document.addEventListener('click', function (e) {
  if (!e.target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')) {
    document.querySelectorAll('.conversation-item-dropdown').forEach(function (i) {
      i.classList.remove('active')
    })
  }
})

document.querySelectorAll('.conversation-form-input').forEach(function (item) {
  item.addEventListener('input', function () {
    this.rows = this.value.split('\n').length
  })
})

document.querySelectorAll('[data-conversation]').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelectorAll('.conversation').forEach(function (i) {
      i.classList.remove('active')
    })
    document.querySelector(this.dataset.conversation).classList.add('active')
  })
})

document.querySelectorAll('.conversation-back').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    this.closest('.conversation').classList.remove('active')
    document.querySelector('.conversation-default').classList.add('active')
  })
})
// 채팅 전송하는 코드
document.addEventListener('DOMContentLoaded', function () {
  // 전송 버튼과 메시지 입력 필드 선택
  const sendButton = document.querySelector('.conversation-form-submit');
  const messageInput = document.querySelector('.conversation-form-input');
  const conversationWrapper = document.querySelector('.conversation-wrapper');

  // 메시지 전송 함수
  function sendMessage() {
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
      // 새로운 메시지 아이템 생성
      const newMessageItem = document.createElement('li');
      newMessageItem.classList.add('conversation-item');

      const messageContent = `
        <div class="conversation-item-side">
          <img class="conversation-item-image" src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" alt="" />
        </div>
        <div class="conversation-item-content">
          <div class="conversation-item-wrapper">
            <div class="conversation-item-box">
              <div class="conversation-item-text">
                <p>${messageText}</p>
                <div class="conversation-item-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
              <div class="conversation-item-dropdown">
                <button type="button" class="conversation-item-dropdown-toggle">
                  <i class="ri-more-2-line"></i>
                </button>
                <ul class="conversation-item-dropdown-list">
                  <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                  <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;

      newMessageItem.innerHTML = messageContent;

      // 대화창에 메시지 추가
      conversationWrapper.appendChild(newMessageItem);

      // 메시지 입력 필드 초기화
      messageInput.value = '';

      // 대화창 스크롤 맨 아래로 이동
      conversationWrapper.scrollTop = conversationWrapper.scrollHeight;
    }
  }


  // 이벤트 핸들러 함수
  function handleEvent(event) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter' && !event.shiftKey)) {
      event.preventDefault();
      sendMessage();
    }
  }

  // 이벤트 리스너 추가
  sendButton.addEventListener('click', handleEvent);
  messageInput.addEventListener('keydown', handleEvent);
});

document.addEventListener('DOMContentLoaded', function () {
  // 전송 버튼과 메시지 입력 필드 선택
  const sendButton = document.querySelector('.conversation-form-submit');
  const messageInput = document.querySelector('.conversation-form-input');
  const conversationWrapper = document.querySelector('.conversation-wrapper');

  // 채팅 목록 선택
  const oneToOneChat = document.getElementById('one-to-one-chat');
  const groupChat = document.getElementById('group-chat');
  const oneToOneList = document.getElementById('one-to-one-list');
  const groupChatList = document.getElementById('group-chat-list');

  // 채팅 목록 전환 함수
  function switchChatList(chatType) {
    if (chatType === 'one-to-one') {
      oneToOneList.style.display = 'block';
      groupChatList.style.display = 'none';
    } else if (chatType === 'group') {
      oneToOneList.style.display = 'none';
      groupChatList.style.display = 'block';
    }
  }

  // 1:1 채팅과 단톡방 클릭 이벤트 리스너 추가
  oneToOneChat.addEventListener('click', function (event) {
    event.preventDefault();
    switchChatList('one-to-one');
  });

  groupChat.addEventListener('click', function (event) {
    event.preventDefault();
    switchChatList('group');
  });

  // 메시지 전송 함수
  function sendMessage() {
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
      // 새로운 메시지 아이템 생성
      const newMessageItem = document.createElement('li');
      newMessageItem.classList.add('conversation-item', 'me');

      const messageContent = `
        <div class="conversation-item-side">
          <img class="conversation-item-image" src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" alt="" />
        </div>
        <div class="conversation-item-content">
          <div class="conversation-item-wrapper">
            <div class="conversation-item-box">
              <div class="conversation-item-text">
                <p>${messageText}</p>
                <div class="conversation-item-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
              <div class="conversation-item-dropdown">
                <button type="button" class="conversation-item-dropdown-toggle">
                  <i class="ri-more-2-line"></i>
                </button>
                <ul class="conversation-item-dropdown-list">
                  <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                  <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;

      newMessageItem.innerHTML = messageContent;

      // 대화창에 메시지 추가
      conversationWrapper.appendChild(newMessageItem);

      // 메시지 입력 필드 초기화
      messageInput.value = '';

      // 대화창 스크롤 맨 아래로 이동
      conversationWrapper.scrollTop = conversationWrapper.scrollHeight;
    }
  }

  // 이벤트 핸들러 함수
  function handleEvent(event) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter' && !event.shiftKey)) {
      event.preventDefault();
      sendMessage();
    }
  }

  // 이벤트 리스너 추가
  sendButton.addEventListener('click', handleEvent);
  messageInput.addEventListener('keydown', handleEvent);
});

document.addEventListener('DOMContentLoaded', function () {
  // 전송 버튼과 메시지 입력 필드 선택
  const sendButton = document.querySelector('.conversation-form-submit');
  const messageInput = document.querySelector('.conversation-form-input');
  const conversationWrappers = document.querySelectorAll('.conversation-wrapper');

  // 채팅 목록 선택
  const oneToOneChat = document.getElementById('one-to-one-chat');
  const groupChat = document.getElementById('group-chat');
  const oneToOneList = document.getElementById('one-to-one-list');
  const groupChatList = document.getElementById('group-chat-list');

  // 채팅 목록 전환 함수
  function switchChatList(chatType) {
    if (chatType === 'one-to-one') {
      oneToOneList.style.display = 'block';
      groupChatList.style.display = 'none';
    } else if (chatType === 'group') {
      oneToOneList.style.display = 'none';
      groupChatList.style.display = 'block';
    }
  }

  // 1:1 채팅과 단톡방 클릭 이벤트 리스너 추가
  oneToOneChat.addEventListener('click', function (event) {
    event.preventDefault();
    switchChatList('one-to-one');
  });

  groupChat.addEventListener('click', function (event) {
    event.preventDefault();
    switchChatList('group');
  });

  // 메시지 전송 함수
  function sendMessage() {
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
      // 새로운 메시지 아이템 생성
      const newMessageItem = document.createElement('li');
      newMessageItem.classList.add('conversation-item', 'me');

      const messageContent = `
        <div class="conversation-item-side">
          <img class="conversation-item-image" src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" alt="" />
        </div>
        <div class="conversation-item-content">
          <div class="conversation-item-wrapper">
            <div class="conversation-item-box">
              <div class="conversation-item-text">
                <p>${messageText}</p>
                <div class="conversation-item-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
              <div class="conversation-item-dropdown">
                <button type="button" class="conversation-item-dropdown-toggle">
                  <i class="ri-more-2-line"></i>
                </button>
                <ul class="conversation-item-dropdown-list">
                  <li><a href="#"><i class="ri-share-forward-line"></i> Forward</a></li>
                  <li><a href="#"><i class="ri-delete-bin-line"></i> Delete</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;

      newMessageItem.innerHTML = messageContent;

      // 현재 활성화된 대화창에 메시지 추가
      const activeConversation = document.querySelector('.conversation.active .conversation-wrapper');
      activeConversation.appendChild(newMessageItem);

      // 메시지 입력 필드 초기화
      messageInput.value = '';

      // 대화창 스크롤 맨 아래로 이동
      activeConversation.scrollTop = activeConversation.scrollHeight;
    }
  }

  // 이벤트 핸들러 함수
  function handleEvent(event) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter' && !event.shiftKey)) {
      event.preventDefault();
      sendMessage();
    }
  }

  // 이벤트 리스너 추가
  sendButton.addEventListener('click', handleEvent);
  messageInput.addEventListener('keydown', handleEvent);

  // 대화창 전환 이벤트 리스너 추가
  document.querySelectorAll('[data-conversation]').forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelectorAll('.conversation').forEach(conv => {
        conv.classList.remove('active');
        conv.style.display = 'none';
      });
      const targetConversation = document.querySelector(this.getAttribute('data-conversation'));
      targetConversation.classList.add('active');
      targetConversation.style.display = 'block';
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // 채팅 목록과 대화창 요소 선택
  const oneToOneChat = document.getElementById('one-to-one-chat');
  const groupChat = document.getElementById('group-chat');
  const oneToOneList = document.getElementById('one-to-one-list');
  const groupChatList = document.getElementById('group-chat-list');
  const conversations = document.querySelectorAll('.conversation');

  // 채팅 목록 전환 함수
  function switchChatList(chatType) {
    if (chatType === 'one-to-one') {
      oneToOneList.style.display = 'block';
      groupChatList.style.display = 'none';
    } else if (chatType === 'group') {
      oneToOneList.style.display = 'none';
      groupChatList.style.display = 'block';
    }
  }

  // 대화창 전환 함수
  function switchConversation(conversationId) {
    conversations.forEach(conv => {
      conv.classList.remove('active');
      conv.style.display = 'none';
    });
    const targetConversation = document.querySelector(conversationId);
    targetConversation.classList.add('active');
    targetConversation.style.display = 'block';
  }

  // 1:1 채팅과 단톡방 클릭 이벤트 리스너 추가
  oneToOneChat.addEventListener('click', function (event) {
    event.preventDefault();
    switchChatList('one-to-one');
  });

  groupChat.addEventListener('click', function (event) {
    event.preventDefault();
    switchChatList('group');
  });

  // 대화창 전환 이벤트 리스너 추가
  document.querySelectorAll('[data-conversation]').forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      switchConversation(this.getAttribute('data-conversation'));
    });
  });
});

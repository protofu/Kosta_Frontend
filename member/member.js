class Member {
    constructor(id, pw, name) {
        this.id = id;
        this.pw = pw;
        this.name = name;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const input_userId = document.querySelector('#uid');
    const input_userPw = document.querySelector('#pw');
    const input_userName = document.querySelector('#uname');
    const input_eId = document.querySelector('#eid');
    const input_ePw = document.querySelector('#epw');
    const input_eName = document.querySelector('#ename');
    const regForm = document.querySelector('#regForm');
    const member_list = document.querySelector('#list-mem');
    const editForm = document.querySelector('#editForm');
    const idx = document.querySelector('#idx');


    // 기존 저장된 멤버를 로드
    if (localStorage.getItem('members')) {
        const members = JSON.parse(localStorage.getItem('members'));
        members.forEach(member => addMemberToList(member.id, member.pw, member.name, member.key));
    }

    // 회원 저장 폼 제출 시
    regForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // 빈칸이 있다면 경고
        if (input_userId.value.trim() === '' || input_userPw.value.trim() === '' || input_userName.value.trim() === '') {
            alert("빈칸이 있습니다.");
            return;
        }

        // 새로운 멤버를 저장할 변수 생성
        const new_member = new Member(input_userId.value, input_userPw.value, input_userName.value);

        addMemberToList(new_member.id, new_member.pw, new_member.name, new_member.key);

        // localStorage에 저장
        const members = localStorage.getItem('members') ? JSON.parse(localStorage.getItem('members')) : [];
        members.push(new_member);
        localStorage.setItem('members', JSON.stringify(members));

        // 폼 초기화
        regForm.reset();
    });

    // 회원 수정 폼 제출 시
    editForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // 빈칸이 있다면 경고
        if (input_eId.value.trim() === '' || input_ePw.value.trim() === '' || input_eName.value.trim() === '') {
            alert("빈칸이 있습니다.");
            return;
        }

        // 기존 멤버 업데이트
        const key = parseInt(idx.value);
        const members = JSON.parse(localStorage.getItem('members'));
        const memberIndex = members.findIndex(member => member.key === key);

        if (memberIndex !== -1) {
            members[memberIndex].id = input_eId.value;
            members[memberIndex].pw = input_ePw.value;
            members[memberIndex].name = input_eName.value;
            localStorage.setItem('members', JSON.stringify(members));

            // 화면 업데이트
            member_list.innerHTML = '';
            members.forEach(member => addMemberToList(member.id, member.pw, member.name, member.key));
        }

        // 폼 초기화 및 수정 폼 숨기기
        editForm.reset();
        document.querySelector('#edit').style.display = 'none';
        document.querySelector('#reg').style.display = 'block';
    });

    function addMemberToList(id, pw, name, key) {
        const new_member = document.createElement('tr');
        new_member.setAttribute('data-key', key);
        const membersString = localStorage.getItem('members');
        let leng = 0;
        if (membersString) {
            const membersArray = JSON.parse(membersString);
            leng = membersArray.length;
        }

        // 각 내용을 저장
        const mem_idx = document.createElement('td');
        mem_idx.textContent = leng;
        const mem_id = document.createElement('td');
        mem_id.textContent = id;
        const mem_pw = document.createElement('td');
        mem_pw.textContent = pw;
        const mem_name = document.createElement('td');
        mem_name.textContent = name;

        // 수정 버튼을 생성
        const btn_edit = document.createElement('button');
        btn_edit.textContent = 'edit';
        btn_edit.addEventListener('click', (e) => {
            document.querySelector('#edit').style.display = 'block';
            document.querySelector('#reg').style.display = 'none';

            const members = JSON.parse(localStorage.getItem('members'));
            const member = members.find(member => member.key === key);

            if (member) {
                idx.value = member.key;
                input_eId.value = member.id;
                input_ePw.value = member.pw;
                input_eName.value = member.name;
            }
        });

        // 삭제 버튼을 생성
        const btn_del = document.createElement('button');
        btn_del.textContent = "delete";
        btn_del.addEventListener('click', (e) => {
            const del_div = document.querySelector(`[data-key="${key}"]`);
            member_list.removeChild(del_div);

            // localStorage에서 삭제
            const members = JSON.parse(localStorage.getItem('members'));
            const updated_members = members.filter(member => member.key !== key);
            localStorage.setItem('members', JSON.stringify(updated_members));
        });

        // 각 내용을 new_member에 저장
        new_member.appendChild(mem_idx);
        new_member.appendChild(mem_id);
        new_member.appendChild(mem_pw);
        new_member.appendChild(mem_name);
        new_member.appendChild(btn_del);
        new_member.appendChild(btn_edit);

        // new_member를 list로 올리기
        member_list.appendChild(new_member);
    }
});

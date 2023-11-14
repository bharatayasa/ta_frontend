import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const EditInput = (props) => {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    id: props.id || '',
    username: props.username || '',
    name: props.name || '',
    email: props.email || '',
    role: props.role || '',
  });

  const modalRef = useRef();

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  const handleFieldChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const onSubmitEventHandler = (e) => {
    e.preventDefault();
    props.updateuser(userData);
    setShow(false);
  };

  return (
    <div>
      <button onClick={handleShow} className="text-l text-white bg-emerald-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 transition duration-300 ease-in-out shadow-md">
        Ubah
      </button>

      {show && (
        <div className="fixed inset-0 mt-20" onClick={handleClose}>
          <div className="text-center pb-10">

            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-slate-600 opacity-40"></div>
            </div>

            <div ref={modalRef} className="inline-block rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white/40 backdrop-blur-sm pt-4 sm:p-6 sm:pb-4">
                <h3 className="text-center text-2xl font-semibold text-sky-900">Ubah Data User</h3>
                <form onSubmit={onSubmitEventHandler} className="space-y-5">

                  <div>
                    <label htmlFor="username" className="block text-lg text-sky-900 font-semibold">Username</label>
                    <input type="text" name="username" value={userData.username} onChange={(e) => handleFieldChange('username', e.target.value)} className="w-full py-2 rounded-lg shadow-lg px-3 border-sky-900" placeholder="username" autoComplete="off" />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-lg text-sky-900 font-semibold">Name</label>
                    <input type="text" name="name" value={userData.name} onChange={(e) => handleFieldChange('name', e.target.value)} className="w-full py-2 rounded-lg shadow-lg px-3 border-sky-900" placeholder="username" autoComplete="off" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg text-sky-900 font-semibold">E-Mail</label>
                    <input type="email" name="email" value={userData.email} onChange={(e) => handleFieldChange('email', e.target.value)} className="w-full py-2 rounded-lg shadow-lg px-3 focus:border-sky-900" placeholder="username" autoComplete="off" />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-lg text-sky-900 font-semibold">Pilih Role</label>
                    <select name="role" value={userData.role} onChange={(e) => handleFieldChange('role', e.target.value)} className="w-full py-2 rounded-lg shadow-lg px-3 focus:border-sky-900" placeholder="username" autoComplete="off">
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="text-l text-white bg-emerald-400 px-3 py-2 rounded-md hover:shadow-xl hover:bg-emerald-500 transition duration-300 ease-in-out shadow-md" >
                      Simpan
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

EditInput.propTypes = {
  updateuser: PropTypes.func.isRequired,
};

export default EditInput;

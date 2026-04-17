import { useState, useEffect } from 'react';
import { Lock, LogOut, Save, X, Eye, Edit3, Image, Bell } from 'lucide-react';
import { getContent, saveContent } from '../lib/contentManager';
import NotificationsPanel from './NotificationsPanel';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [content, setContent] = useState(null);
  const [activeTab, setActiveTab] = useState('packages.national');
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});
  const [preview, setPreview] = useState(null);

  const ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' };

  useEffect(() => {
    if (isAuthenticated) {
      const loaded = getContent();
      setContent(loaded);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (editingId && content) {
      const item = getItemById(editingId);
      setFormData({ ...item });
      setPreview(item);
    }
  }, [editingId]);

  const getItemById = (id) => {
    const [section, subsection] = activeTab.split('.');
    const data = subsection
      ? content[section]?.[subsection]
      : content[section];
    return Array.isArray(data)
      ? data.find(item => item.id === id)
      : data;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setUsername('');
      setPassword('');
    } else {
      alert('Credenciales inválidas');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setContent(null);
    setEditingId(null);
  };

  const startEdit = (id) => {
    setEditingId(id);
  };

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    setPreview(updated);
  };

  const saveEdit = () => {
    if (!content || !editingId) return;

    const newContent = JSON.parse(JSON.stringify(content));
    const [section, subsection] = activeTab.split('.');

    if (subsection) {
      const idx = newContent[section][subsection].findIndex(item => item.id === editingId);
      if (idx >= 0) {
        newContent[section][subsection][idx] = formData;
      }
    } else {
      const idx = newContent[section].findIndex(item => item.id === editingId);
      if (idx >= 0) {
        newContent[section][idx] = formData;
      }
    }

    saveContent(newContent);
    setContent(newContent);
    setEditingId(null);
    alert('Cambios guardados correctamente');
  };

  const getItems = () => {
    const [section, subsection] = activeTab.split('.');
    return subsection
      ? content?.[section]?.[subsection] || []
      : content?.[section] || [];
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <div className="flex items-center justify-center mb-6">
            <Lock className="text-red-500 mr-2" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">Admin</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-orange-500 transition"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-900">Cargando...</p>
        </div>
      </div>
    );
  }

  const items = getItems();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard Admin</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-orange-500 rounded-lg transition"
          >
            <LogOut size={20} />
            Salir
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow mb-6 p-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => { setActiveTab('notifications'); setEditingId(null); }}
              className={`px-4 py-2 font-semibold rounded-lg transition whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'notifications'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              <Bell size={20} />
              Notificaciones
            </button>

            {[
              { id: 'packages.national', label: 'Paquetes Nac.' },
              { id: 'packages.international', label: 'Paquetes Int.' },
              { id: 'flights', label: 'Vuelos' },
              { id: 'insurance', label: 'Seguros' },
              { id: 'concerts', label: 'Conciertos' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setEditingId(null); }}
                className={`px-4 py-2 font-semibold rounded-lg transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'notifications' && <NotificationsPanel />}

        {activeTab !== 'notifications' && (
          <>
            {editingId ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      <Edit3 size={28} className="text-orange-500" />
                      Editar
                    </h2>
                    <button onClick={() => setEditingId(null)} className="p-2 hover:bg-gray-200 rounded-lg transition">
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                    {Object.entries(formData).map(([key, value]) => {
                      if (key === 'id' || key === 'recommended') return null;

                      return (
                        <div key={key}>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            {key === 'image' && <Image size={16} className="inline mr-2 text-orange-500" />}
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </label>

                          {key === 'image' ? (
                            <input
                              type="url"
                              value={value}
                              onChange={(e) => handleChange(key, e.target.value)}
                              placeholder="https://images.unsplash.com/photo-..."
                              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-sm"
                            />
                          ) : key === 'description' || key === 'includes' ? (
                            <textarea
                              value={typeof value === 'string' ? value : JSON.stringify(value)}
                              onChange={(e) =>
                                handleChange(
                                  key,
                                  key === 'includes'
                                    ? e.target.value.split(',').map((s) => s.trim())
                                    : e.target.value
                                )
                              }
                              rows="3"
                              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-sm"
                            />
                          ) : (
                            <input
                              type={key === 'price' ? 'number' : 'text'}
                              value={typeof value === 'string' || typeof value === 'number' ? value : ''}
                              onChange={(e) =>
                                handleChange(key, key === 'price' ? parseFloat(e.target.value) : e.target.value)
                              }
                              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-sm"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-3 mt-6 pt-6 border-t">
                    <button
                      onClick={saveEdit}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
                    >
                      <Save size={20} />
                      Guardar
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex-1 px-4 py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 transition"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20 h-fit">
                  <div className="flex items-center gap-2 mb-6">
                    <Eye size={28} className="text-red-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Vista Previa</h2>
                  </div>

                  {preview && (
                    <div className="space-y-4 border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                      {preview.image && (
                        <img
                          src={preview.image}
                          alt="preview"
                          className="w-full h-40 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22200%22/%3E%3C/svg%3E';
                          }}
                        />
                      )}

                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-gray-900">
                          {preview.title || preview.artist || preview.name}
                        </h3>

                        <p className="text-sm text-gray-600 line-clamp-2">
                          {preview.description}
                        </p>

                        {preview.price && (
                          <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-lg font-bold">
                            ${preview.price}
                          </div>
                        )}

                        {preview.includes && Array.isArray(preview.includes) && (
                          <ul className="text-xs space-y-1 pt-2 border-t border-gray-300">
                            {preview.includes.slice(0, 3).map((item, i) => (
                              <li key={i} className="text-gray-600">• {item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : null}

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">{activeTab.replace('.', ' - ')}</h2>
                <p className="text-sm text-gray-500">Total: {items.length} items</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`border-2 rounded-lg overflow-hidden transition ${
                      editingId === item.id
                        ? 'border-red-500 shadow-lg'
                        : 'border-gray-200 hover:shadow-lg hover:border-orange-500'
                    }`}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title || item.artist || item.name}
                        className="w-full h-32 object-cover"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22200%22/%3E%3C/svg%3E';
                        }}
                      />
                    )}

                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 truncate mb-2">
                        {item.title || item.artist || item.name}
                      </h3>
                      {item.price && <p className="text-red-500 font-bold mb-3 text-sm">${item.price}</p>}
                      <button
                        onClick={() => startEdit(item.id)}
                        className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-red-500 transition"
                      >
                        <Edit3 size={16} />
                        Editar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

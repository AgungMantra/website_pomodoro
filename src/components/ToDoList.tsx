import { useState } from 'react';
import { Plus, Play, Edit2, Trash2, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import type { Task } from '../App';

interface TodoListProps {
  tasks: Task[];
  onAddTask: (task: Omit<Task, 'id'>) => void;
  onUpdateTask: (id: string, updates: Partial<Task>) => void;
  onDeleteTask: (id: string) => void;
  onStartTask: (id: string) => void;
  currentTaskId: string | null;
}

export function TodoList({ tasks, onAddTask, onUpdateTask, onDeleteTask, onStartTask, currentTaskId }: TodoListProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: 25
  });

  const handleSubmit = () => {
    if (formData.title.trim()) {
      if (editingId) {
        onUpdateTask(editingId, formData);
        setEditingId(null);
      } else {
        onAddTask({ ...formData, status: 'pending' });
      }
      setFormData({ title: '', description: '', duration: 25 });
      setIsAdding(false);
    }
  };

  const handleEdit = (task: Task) => {
    setEditingId(task.id);
    setFormData({
      title: task.title,
      description: task.description,
      duration: task.duration
    });
    setIsAdding(true);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({ title: '', description: '', duration: 25 });
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-white">Tasks</h2>
        {!isAdding && (
          <Button
            onClick={() => setIsAdding(true)}
            className="bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] hover:from-[#4DC3FF]/80 hover:to-[#A470FF]/80 text-white rounded-xl border-2 border-transparent hover:border-[#4DC3FF]/50 transition-all"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Task
          </Button>
        )}
      </div>

      {/* Add/Edit Task Form */}
      {isAdding && (
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-[#4DC3FF]/30 p-6 shadow-lg shadow-[#4DC3FF]/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/10 to-[#A470FF]/10 rounded-2xl blur-xl" />
          
          <div className="relative space-y-4">
            <Input
              placeholder="Task title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
            />
            <Textarea
              placeholder="Task description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl min-h-[80px]"
            />
            <div className="flex items-center gap-2">
              <label className="text-white/70 text-sm">Duration (minutes):</label>
              <Input
                type="number"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 25 })}
                className="bg-white/10 border-white/20 text-white w-24 rounded-xl"
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-[#4DC3FF] to-[#A470FF] hover:from-[#4DC3FF]/80 hover:to-[#A470FF]/80 text-white rounded-xl"
              >
                <Check className="w-4 h-4 mr-2" />
                {editingId ? 'Update' : 'Add'} Task
              </Button>
              <Button
                onClick={handleCancel}
                className="bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/20"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#4DC3FF]/30 p-6 transition-all hover:shadow-lg hover:shadow-[#4DC3FF]/10"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4DC3FF]/5 to-[#A470FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-start gap-4">
              {/* Task Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-white">{task.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      task.status === 'completed'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : task.status === 'in-progress'
                        ? 'bg-[#4DC3FF]/20 text-[#4DC3FF] border border-[#4DC3FF]/30'
                        : 'bg-white/10 text-white/70 border border-white/20'
                    }`}
                  >
                    {task.status === 'completed' ? 'Completed' : task.status === 'in-progress' ? 'In Progress' : 'Pending'}
                  </span>
                </div>
                <p className="text-white/60 text-sm mb-3">{task.description}</p>
                <div className="flex items-center gap-4 text-sm text-white/50">
                  <span>{task.duration} min</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {task.status !== 'completed' && (
                  <button
                    onClick={() => onStartTask(task.id)}
                    disabled={currentTaskId === task.id}
                    className={`p-2 rounded-xl transition-all ${
                      currentTaskId === task.id
                        ? 'bg-[#4DC3FF]/20 text-[#4DC3FF] border border-[#4DC3FF]/30'
                        : 'bg-white/5 hover:bg-[#4DC3FF]/20 text-white/70 hover:text-[#4DC3FF] border border-white/10 hover:border-[#4DC3FF]/30'
                    }`}
                  >
                    <Play className="w-4 h-4" />
                  </button>
                )}
                {task.status !== 'completed' && (
                  <button
                    onClick={() => handleEdit(task)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white/70 hover:text-white transition-all"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                )}
                {task.status === 'pending' && (
                  <button
                    onClick={() => onUpdateTask(task.id, { status: 'completed' })}
                    className="p-2 bg-white/5 hover:bg-green-500/20 rounded-xl border border-white/10 hover:border-green-500/30 text-white/70 hover:text-green-300 transition-all"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="p-2 bg-white/5 hover:bg-red-500/20 rounded-xl border border-white/10 hover:border-red-500/30 text-white/70 hover:text-red-300 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {tasks.length === 0 && !isAdding && (
          <div className="text-center py-12 text-white/40">
            <p>No tasks yet. Add your first task to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
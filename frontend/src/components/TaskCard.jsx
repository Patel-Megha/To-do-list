import React from "react";
import { Trash2, CheckCircle2, Circle } from "lucide-react";

const TaskCard = ({ task, onDelete, onToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          <button
            onClick={() => onToggle(task._id, !task.completed)}
            className="mt-1 shrink-0"
          >
            {task.completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            ) : (
              <Circle className="w-6 h-6 text-gray-300 hover:text-gray-400" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <h3
              className={`text-lg font-semibold ${
                task.completed ? "text-gray-400 line-through" : "text-gray-800"
              }`}
            >
              {task.title}
            </h3>
            <p
              className={`text-sm mt-1 ${
                task.completed ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {task.description}
            </p>
          </div>
        </div>

        <button
          onClick={() => onDelete(task._id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition flex-shrink-0"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

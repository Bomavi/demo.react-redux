export interface TasksSearchType {
  q?: string;
  size?: number;
  page?: number;
}

export interface TaskSchema {
  _id: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  updateInProgress?: boolean;
  deleteInProgress?: boolean;
}

export interface TaskCreateSchema {
  description: string;
  completed: boolean;
}

export interface TaskUpdateSchema {
  id: string;
  description: string;
  completed: boolean;
}

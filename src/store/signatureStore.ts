import { create } from 'zustand'
import { type SignatureStore, defaultSignatureData } from '@/types/signature'

export const useSignatureStore = create<SignatureStore>((set) => ({
  data: defaultSignatureData,
  selectedTemplate: 'default',
  
  updateField: (field, value) =>
    set((state) => ({
      data: {
        ...state.data,
        [field]: value,
      },
    })),
    
  updateTemplate: (template) =>
    set(() => ({
      selectedTemplate: template,
    })),
    
  resetData: () =>
    set(() => ({
      data: defaultSignatureData,
    })),
}))

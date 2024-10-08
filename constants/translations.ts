import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'

type Translation = {
    tracker_screen: {
        layout: {
            tracker: string
            tasks: string
            tags: string
            insights: string
            home: string
        }
        index: {
            title: string
            no_logs: string
            questions: string
            tags: string
            add_tag: string
            save_btn: string
            oops_alert: string
            error_alert: string
            success_alert: string
            no_time: string
            no_task: string
            task_create_failed: string
            log_create_failed: string
            log_create_success: string
            tag_create_failed: string
            time_log: string
            daily_goal_title: string
            delete_timelog: string
            delete_timelog_msg: string
            cancel: string
            delete: string
            delete_success: string
            delete_timelog_success: string
            delete_failed: string
            delete_timelog_failed: string
        }
        poromodo: {
            break_title: string
            break_msg: string
            break_complete: string
            break_complete_msg: string
            continue: string
            end_pomodoro: string
            stop_pomodoro: string
            stop_pomodoro_msg: string
            yes: string
            no: string
            break: string
            pause: string
        }
    }
    tag_screen: {
        layout: {
            title: string
            add_tags: string
        }
        index: {
            title: string
        }
        add: {
            title: string
            edit_tag: string
            create_tag: string
            tag_name: string
            tag_color: string
            name_required: string
            color_required: string
            save_btn: string
            delete_btn: string
            delete_alert: string
            delete_alert_msg: string
            cancel: string
            delete: string
            tag_create_failed: string
            tag_create_success: string
            tag_update_failed: string
            tag_update_success: string
            tag_delete_failed: string
            tag_delete_success: string
            place_holder: string
            error: string
            requires: string
            no_time: string
        }
    }
    task_screen: {
        index: {
            title: string
            all_tasks: string
            edit: string
            add: string
        }
        add: {
            desc_alert: string
            name_placeholder: string
            save: string
            label: string
        }
        edit: {
            label: string
            delete_alert_title: string
            delete_alert_msg: string
            cancel: string
            delete: string
            error: string
            error_msg: string
            ok: string
            name_placeholder: string
            save: string
            total_time: string
            import: string
            export: string
        }
    }
    insights_screen: {
        layout: {
            title: string
        }
        index: {
            no_data: string
            duration: string
            select_duration: string
            select_duration_label: string
            daily: string
            weekly: string
            monthly: string
            yearly: string
            all: string
            all_time: string
        }
    }
    themes: {
        title: string
        dark_mode: string
        on: string
        off: string
        colors: string
        orange: string
        yellow: string
        green: string
        blue: string
        purple: string
        pink: string
        red: string
    }
    settings: {
        title: string
        themes: string
        themes_subtitle: string
        goals: string
        goals_subtitle: string
        tutorial: string
        tutorial_subtitle: string
    }
    components: {
        task_card: {
            no_time: string
            edit: string
        }
        tag_stat: {
            total_time: string
            logs: string
            log: string
        }
        time_format: {
            today: string
            monday: string
            tuesday: string
            wednesday: string
            thursday: string
            friday: string
            saturday: string
            sunday: string
        }
    }
    loading_db: string
    goals_screen: {
        title: string
        dailyGoalTitile: string
        on: string
        off: string
        inputPlaceholder: string
        setBtn: string
        prevGoalTime: string
        notificationTitle: string
        notificationMessage: string
        notificationLabel: string
        notificationTimeLabel: string
    }
    alert: {
        error: string
        goalSet: string
        goalSetMessage: string
        ok: string
        goalSetError: string
        notificationSet: string
        notificationSetMessage: string
    }
    tutorial: {
        skip_btn: string
        next_btn: string
        back_btn: string
        finish_btn: string
        step1: {
            title: string
            description: string
        }
        step2: {
            title: string
            description: string
        }
        step3: {
            title: string
            description: string
        }
        step4: {
            title: string
            description: string
        }
        step5: {
            title: string
            description: string
        }
        step6: {
            title: string
            description: string
        }
    }
}

const en: Translation = {
    tracker_screen: {
        layout: {
            tracker: 'Tracker',
            tasks: 'Tasks',
            tags: 'Tags',
            insights: 'Insights',
            home: 'Home',
        },
        index: {
            title: 'Logs',
            no_logs: 'No logs found',
            questions: 'What did you do?',
            tags: 'Tags',
            add_tag: 'Add tag',
            save_btn: 'Save',
            oops_alert: 'Oops!',
            error_alert: 'Error',
            success_alert: 'Success',
            no_time: 'No time to log',
            no_task: 'Please select a task',
            task_create_failed: 'Failed to create task',
            log_create_failed: 'Failed to create timelog',
            log_create_success: 'Time log created successfully',
            tag_create_failed: 'Failed to create timelog tag',
            time_log: 'Time Log',
            daily_goal_title: "Today's Progress",
            delete_timelog: 'Delete Timelog',
            delete_timelog_msg: 'Are you sure you want to delete this timelog?',
            cancel: 'Cancel',
            delete: 'Delete',
            delete_success: 'Success',
            delete_timelog_success: 'Timelog deleted',
            delete_failed: 'Error',
            delete_timelog_failed: 'Failed to delete timelog',
        },
        poromodo: {
            break_title: 'Focus Session Completed',
            break_msg: 'Time to take a break!',
            break_complete: 'Break Session Completed',
            break_complete_msg: 'Time to focus!',
            continue: 'Continue',
            end_pomodoro: 'End Pomodoro',
            stop_pomodoro: 'Leave Pomodoro',
            stop_pomodoro_msg: 'This will stop the pomodoro timer.',
            yes: 'Yes',
            no: 'No',
            break: 'Break',
            pause: 'Pause',
        },
    },
    tag_screen: {
        layout: {
            title: 'Tags',
            add_tags: 'Add Tag',
        },
        index: {
            title: 'Tags',
        },
        add: {
            title: 'Add Tag',
            edit_tag: 'Edit Tag',
            create_tag: 'Create New Tag',
            tag_name: 'Tag Name',
            tag_color: 'Tag Color',
            name_required: 'Name is required',
            color_required: 'Color is required',
            save_btn: 'Save',
            delete_btn: 'Delete',
            delete_alert: 'Delete Tag',
            delete_alert_msg: 'Are you sure you want to delete this tag?',
            cancel: 'Cancel',
            delete: 'Delete Tag',
            tag_create_failed: 'Failed to create tag',
            tag_create_success: 'Tag created successfully',
            tag_update_failed: 'Failed to update tag',
            tag_update_success: 'Tag updated successfully',
            tag_delete_failed: 'Failed to delete tag',
            tag_delete_success: 'Tag deleted successfully',
            place_holder: 'E.g. work, personal, study, etc.',
            error: 'Error',
            requires: 'Name and Color are required',
            no_time: 'No time logged',
        },
    },

    task_screen: {
        index: {
            title: 'Tasks',
            all_tasks: 'All Tasks',
            edit: 'Edit Task',
            add: 'Add Task',
        },
        add: {
            desc_alert: 'Task description is required',
            name_placeholder: 'Enter Task Name',
            save: 'Save',
            label: 'Task Name',
        },
        edit: {
            label: 'Task Name',
            delete_alert_title: 'Delete Task',
            delete_alert_msg:
                'This will delete all related time records. Are you sure you want to delete this task?',
            cancel: 'Cancel',
            delete: 'Delete',
            error: 'Error',
            error_msg: 'These time records do not belong to this task',
            ok: 'OK',
            name_placeholder: 'Enter Task Name',
            save: 'Save',
            total_time: 'Total Time Used:',
            import: 'Import Data',
            export: 'Export Data',
        },
    },

    insights_screen: {
        layout: {
            title: 'Insights',
        },
        index: {
            no_data: 'No data to show',
            duration: 'Duration',
            select_duration: 'Select duration to view insights',
            select_duration_label: 'Select duration to view insights',
            daily: 'Today',
            weekly: 'Weekly',
            monthly: 'Monthly',
            yearly: 'Yearly',
            all: 'All',
            all_time: 'All time',
        },
    },

    themes: {
        title: 'System Theme',
        dark_mode: 'Dark Mode',
        on: 'On',
        off: 'Off',
        colors: 'Colors',
        orange: 'Orange',
        yellow: 'Yellow',
        green: 'Green',
        blue: 'Blue',
        purple: 'Purple',
        pink: 'Pink',
        red: 'Red',
    },

    settings: {
        title: 'Settings',
        themes: 'Themes',
        themes_subtitle: 'Personalize your app',
        goals: 'Goals',
        goals_subtitle: 'Set your goals',
        tutorial: 'Tutorial',
        tutorial_subtitle: 'Learn how to use the app',
    },

    components: {
        task_card: {
            no_time: 'No time logged',
            edit: 'Edit',
        },
        tag_stat: {
            total_time: 'Total time: ',
            logs: 'logs',
            log: 'log',
        },
        time_format: {
            today: 'Today',
            monday: 'Mon',
            tuesday: 'Tue',
            wednesday: 'Wed',
            thursday: 'Thu',
            friday: 'Fri',
            saturday: 'Sat',
            sunday: 'Sun',
        },
    },

    loading_db: 'Loading Database...',

    goals_screen: {
        title: 'Goals are made to achieve!',
        dailyGoalTitile: 'Daily Time Goal',
        on: 'On',
        off: 'Off',
        inputPlaceholder: 'Enter Time Goal, e.g. 1h 30m',
        setBtn: 'Set',
        prevGoalTime: 'Previous Goal: ',
        notificationTitle: '⏱️ Daily Goal',
        notificationMessage: 'Make sure to complete your daily goal!',
        notificationLabel: 'Notification',
        notificationTimeLabel: 'Notification Time',
    },

    alert: {
        error: 'Error',
        goalSet: 'Goal Set',
        goalSetMessage: 'Your goal has been successfully set!',
        ok: 'OK',
        goalSetError: 'Please set a valid goal',
        notificationSet: 'Notification Set',
        notificationSetMessage: 'Your notification has been successfully set!',
    },

    tutorial: {
        skip_btn: 'Skip Tutorial',
        next_btn: 'Next',
        back_btn: 'Back',
        finish_btn: 'Finish',
        step1: {
            title: 'Welcome to Timebrew!',
            description:
                'Timebrew is a time tracking app that helps you keep track of your time spent on different tasks.',
        },
        step2: {
            title: 'Track your time',
            description: 'Use the timer to track your time spent on tasks.',
        },
        step3: {
            title: 'View your timelogs',
            description: 'View your recent timelogs in the home screen.',
        },
        step4: {
            title: 'Manage your Tasks & Tags',
            description:
                'You can manage your tasks and tags in their respective sections.',
        },
        step5: {
            title: 'Get Insights',
            description:
                'You can view insights on your time usage in the insights section.',
        },
        step6: {
            title: 'Themes, Goals & More',
            description:
                'You can set themes, goals and more in the settings section.',
        },
    },
}

const vi: Translation = {
    tracker_screen: {
        layout: {
            tracker: 'Theo dõi',
            tasks: 'Công Việc',
            tags: 'Thẻ',
            insights: 'Thông Tin Chi Tiết',
            home: 'Trang Chủ',
        },
        index: {
            title: 'Nhật Ký',
            no_logs: 'Không tìm thấy nhật ký',
            questions: 'Bạn đã làm gì?',
            tags: 'Thẻ',
            add_tag: 'Thêm thẻ',
            save_btn: 'Lưu',
            oops_alert: 'Ối!',
            error_alert: 'Lỗi',
            success_alert: 'Thành công',
            no_time: 'Không có thời gian để ghi nhật ký',
            no_task: 'Vui lòng chọn một công việc',
            task_create_failed: 'Không tạo được công việc',
            log_create_failed: 'Không tạo được nhật ký thời gian',
            log_create_success: 'Tạo nhật ký thời gian thành công',
            tag_create_failed: 'Không tạo được thẻ nhật ký thời gian',
            time_log: 'Nhật Ký Thời Gian',
            daily_goal_title: 'Tiến độ hôm nay',
            delete_timelog: 'Xóa nhật ký thời gian',
            delete_timelog_msg:
                'Bạn có chắc chắn muốn xóa nhật ký thời gian này?',
            cancel: 'Hủy',
            delete: 'Xóa',
            delete_success: 'Thành công',
            delete_timelog_success: 'Nhật ký thời gian đã được xóa',
            delete_failed: 'Lỗi',
            delete_timelog_failed: 'Không thể xóa nhật ký thời gian',
        },
        poromodo: {
            break_title: 'Hoàn Thành Phiên Tập Trung',
            break_msg: 'Đã đến lúc nghỉ ngơi!',
            break_complete: 'Hoàn Thành Phiên Nghỉ Ngơi',
            break_complete_msg: 'Đã đến lúc tập trung!',
            continue: 'Tiếp Tục',
            end_pomodoro: 'Kết Thúc Pomodoro',
            stop_pomodoro: 'Rời Khỏi Pomodoro',
            stop_pomodoro_msg: 'Điều này sẽ dừng bộ đếm pomodoro.',
            yes: 'Có',
            no: 'Không',
            break: 'Nghỉ Ngơi',
            pause: 'Tạm Dừng',
        },
    },
    tag_screen: {
        layout: {
            title: 'Thẻ',
            add_tags: 'Thêm Thẻ',
        },
        index: {
            title: 'Thẻ',
        },
        add: {
            title: 'Thêm Thẻ',
            edit_tag: 'Chỉnh Sửa Thẻ',
            create_tag: 'Tạo Thẻ Mới',
            tag_name: 'Tên Thẻ',
            tag_color: 'Màu Thẻ',
            name_required: 'Cần có tên',
            color_required: 'Cần có màu',
            save_btn: 'Lưu',
            delete_btn: 'Xóa',
            delete_alert: 'Xóa Thẻ',
            delete_alert_msg: 'Bạn có chắc chắn muốn xóa thẻ này không?',
            cancel: 'Hủy',
            delete: 'Xóa Thẻ',
            tag_create_failed: 'Không tạo được thẻ',
            tag_create_success: 'Tạo thẻ thành công',
            tag_update_failed: 'Không cập nhật được thẻ',
            tag_update_success: 'Cập nhật thẻ thành công',
            tag_delete_failed: 'Không xóa được thẻ',
            tag_delete_success: 'Xóa thẻ thành công',
            place_holder: 'Ví dụ: công việc, cá nhân, học tập, v.v.',
            error: 'Lỗi',
            requires: 'Cần có tên và màu',
            no_time: 'Không có thời gian được ghi nhận',
        },
    },

    task_screen: {
        index: {
            title: 'Công Việc',
            all_tasks: 'Tất Cả Công Việc',
            edit: 'Chỉnh Sửa Công Việc',
            add: 'Thêm Công Việc',
        },
        add: {
            desc_alert: 'Cần mô tả công việc',
            name_placeholder: 'Nhập Tên Công Việc',
            save: 'Lưu',
            label: 'Tên Công Việc',
        },
        edit: {
            label: 'Tên Công Việc',
            delete_alert_title: 'Xóa Công Việc',
            delete_alert_msg:
                'Điều này sẽ xóa tất cả các ghi chép thời gian liên quan. Bạn có chắc chắn muốn xóa công việc này không?',
            cancel: 'Hủy',
            delete: 'Xóa',
            error: 'Lỗi',
            error_msg:
                'Những ghi chép thời gian này không thuộc về công việc này',
            ok: 'OK',
            name_placeholder: 'Nhập Tên Công Việc',
            save: 'Lưu',
            total_time: 'Tổng Thời Gian Sử Dụng:',
            import: 'Nhập Dữ Liệu',
            export: 'Xuất Dữ Liệu',
        },
    },

    insights_screen: {
        layout: {
            title: 'Thông Tin Chi Tiết',
        },
        index: {
            no_data: 'Không có dữ liệu để hiển thị',
            duration: 'Thời Lượng',
            select_duration: 'Chọn thời lượng để xem thông tin chi tiết',
            select_duration_label: 'Chọn thời lượng để xem thông tin chi tiết',
            daily: 'Hôm Nay',
            weekly: 'Hàng Tuần',
            monthly: 'Hàng Tháng',
            yearly: 'Hàng Năm',
            all: 'Tất Cả',
            all_time: 'Mọi Thời Gian',
        },
    },

    themes: {
        title: 'Chủ Đề Hệ Thống',
        dark_mode: 'Chế Độ Tối',
        on: 'Bật',
        off: 'Tắt',
        colors: 'Màu Sắc',
        orange: 'Cam',
        yellow: 'Vàng',
        green: 'Xanh Lá',
        blue: 'Xanh Dương',
        purple: 'Tím',
        pink: 'Hồng',
        red: 'Đỏ',
    },

    settings: {
        title: 'Cài Đặt',
        themes: 'Chủ Đề',
        themes_subtitle: 'Cá nhân hóa ứng dụng của bạn',
        goals: 'Mục tiêu',
        goals_subtitle: 'Đặt mục tiêu của bạn',
        tutorial: 'Hướng Dẫn',
        tutorial_subtitle: 'Học cách sử dụng ứng dụng',
    },

    components: {
        task_card: {
            no_time: 'Không có thời gian được ghi nhận',
            edit: 'Chỉnh Sửa',
        },
        tag_stat: {
            total_time: 'Tổng thời gian: ',
            logs: 'nhật ký',
            log: 'nhật ký',
        },
        time_format: {
            today: 'Hôm Nay',
            monday: 'Thứ Hai',
            tuesday: 'Thứ Ba',
            wednesday: 'Thứ Tư',
            thursday: 'Thứ Năm',
            friday: 'Thứ Sáu',
            saturday: 'Thứ Bảy',
            sunday: 'Chủ Nhật',
        },
    },

    loading_db: 'Đang tải cơ sở dữ liệu...',

    goals_screen: {
        title: 'Mục tiêu được tạo ra để đạt được!',
        dailyGoalTitile: 'Mục tiêu thời gian hàng ngày',
        on: 'Bật',
        off: 'Tắt',
        inputPlaceholder: 'Nhập Mục tiêu thời gian, ví dụ: 1h 30m',
        setBtn: 'Đặt',
        prevGoalTime: 'Mục tiêu trước: ',
        notificationTitle: '⏱️ Mục tiêu hàng ngày',
        notificationMessage:
            'Hãy chắc chắn hoàn thành mục tiêu hàng ngày của bạn!',
        notificationLabel: 'Thông Báo',
        notificationTimeLabel: 'Thời Gian Thông Báo',
    },

    alert: {
        error: 'Lỗi',
        goalSet: 'Mục tiêu đã đặt', // Alert Title
        goalSetMessage: 'Mục tiêu của bạn đã được đặt thành công!', // Alert Message
        ok: 'OK', // Alert Button
        goalSetError: 'Vui lòng đặt mục tiêu hợp lệ', // Alert Message
        notificationSet: 'Thông báo đã đặt', // Alert Title
        notificationSetMessage: 'Thông báo của bạn đã được đặt thành công!', // Alert
    },

    tutorial: {
        skip_btn: 'Bỏ qua Hướng Dẫn',
        next_btn: 'Tiếp',
        back_btn: 'Quay lại',
        finish_btn: 'Hoàn Thành',
        step1: {
            title: 'Chào mừng đến với Timebrew!',
            description:
                'Timebrew là ứng dụng theo dõi thời gian giúp bạn theo dõi thời gian bạn đã dành cho các công việc khác nhau.',
        },
        step2: {
            title: 'Theo dõi thời gian của bạn',
            description:
                'Sử dụng bộ đếm để theo dõi thời gian bạn đã dành cho các công việc.',
        },
        step3: {
            title: 'Xem nhật ký thời gian của bạn',
            description:
                'Xem nhật ký thời gian gần đây của bạn trên màn hình chính.',
        },
        step4: {
            title: 'Quản lý Công Việc & Thẻ của bạn',
            description:
                'Bạn có thể quản lý công việc và thẻ của mình trong các phần tương ứng.',
        },
        step5: {
            title: 'Nhận thông tin chi tiết',
            description:
                'Bạn có thể xem thông tin chi tiết về việc sử dụng thời gian của mình trong phần thông tin chi tiết.',
        },
        step6: {
            title: 'Chủ Đề, Mục Tiêu & Nhiều Hơn Nữa',
            description:
                'Bạn có thể đặt chủ đề, mục tiêu và nhiều hơn nữa trong phần cài đặt.',
        },
    },
}

const fr: Translation = {
    tracker_screen: {
        layout: {
            tracker: 'Suivi',
            tasks: 'Tâches',
            tags: 'Étiquettes',
            insights: 'Aperçus',
            home: 'Accueil',
        },
        index: {
            title: 'Journaux',
            no_logs: 'Aucun journal trouvé',
            questions: "Qu'avez-vous fait?",
            tags: 'Étiquettes',
            add_tag: 'Ajouter une étiquette',
            save_btn: 'Enregistrer',
            oops_alert: 'Oups!',
            error_alert: 'Erreur',
            success_alert: 'Succès',
            no_time: 'Aucun temps à enregistrer',
            no_task: 'Veuillez sélectionner une tâche',
            task_create_failed: 'Échec de la création de la tâche',
            log_create_failed: 'Échec de la création du journal de temps',
            log_create_success: 'Journal de temps créé avec succès',
            tag_create_failed:
                "Échec de la création de l'étiquette de journal de temps",
            time_log: 'Journal de Temps',
            daily_goal_title: "Progrès d'aujourd'hui",
            delete_timelog: 'Supprimer le journal de temps',
            delete_timelog_msg:
                'Êtes-vous sûr de vouloir supprimer ce journal de temps?',
            cancel: 'Annuler',
            delete: 'Supprimer',
            delete_success: 'Succès',
            delete_timelog_success: 'Journal de temps supprimé',
            delete_failed: 'Erreur',
            delete_timelog_failed:
                'Échec de la suppression du journal de temps',
        },
        poromodo: {
            break_title: 'Session de Concentration Terminée',
            break_msg: 'Il est temps de faire une pause!',
            break_complete: 'Session de Pause Terminée',
            break_complete_msg: 'Il est temps de se concentrer!',
            continue: 'Continuer',
            end_pomodoro: 'Terminer Pomodoro',
            stop_pomodoro: 'Quitter Pomodoro',
            stop_pomodoro_msg: 'Cela arrêtera le minuteur pomodoro.',
            yes: 'Oui',
            no: 'Non',
            break: 'Pause',
            pause: 'Pause',
        },
    },
    tag_screen: {
        layout: {
            title: 'Étiquettes',
            add_tags: 'Ajouter une étiquette',
        },
        index: {
            title: 'Étiquettes',
        },
        add: {
            title: 'Ajouter une Étiquette',
            edit_tag: "Modifier l'Étiquette",
            create_tag: 'Créer une Nouvelle Étiquette',
            tag_name: "Nom de l'Étiquette",
            tag_color: "Couleur de l'Étiquette",
            name_required: 'Le nom est requis',
            color_required: 'La couleur est requise',
            save_btn: 'Enregistrer',
            delete_btn: 'Supprimer',
            delete_alert: "Supprimer l'Étiquette",
            delete_alert_msg:
                'Êtes-vous sûr de vouloir supprimer cette étiquette?',
            cancel: 'Annuler',
            delete: "Supprimer l'Étiquette",
            tag_create_failed: "Échec de la création de l'étiquette",
            tag_create_success: 'Étiquette créée avec succès',
            tag_update_failed: "Échec de la mise à jour de l'étiquette",
            tag_update_success: 'Étiquette mise à jour avec succès',
            tag_delete_failed: "Échec de la suppression de l'étiquette",
            tag_delete_success: 'Étiquette supprimée avec succès',
            place_holder: 'Par exemple: travail, personnel, étude, etc.',
            error: 'Erreur',
            requires: 'Le nom et la couleur sont requis',
            no_time: 'Aucun temps enregistré',
        },
    },

    task_screen: {
        index: {
            title: 'Tâches',
            all_tasks: 'Toutes les Tâches',
            edit: 'Modifier la Tâche',
            add: 'Ajouter une Tâche',
        },
        add: {
            desc_alert: 'La description de la tâche est requise',
            name_placeholder: 'Entrez le nom de la tâche',
            save: 'Enregistrer',
            label: 'Nom de la Tâche',
        },
        edit: {
            label: 'Nom de la Tâche',
            delete_alert_title: 'Supprimer la Tâche',
            delete_alert_msg:
                'Cela supprimera tous les enregistrements de temps associés. Êtes-vous sûr de vouloir supprimer cette tâche?',
            cancel: 'Annuler',
            delete: 'Supprimer',
            error: 'Erreur',
            error_msg:
                "Ces enregistrements de temps n'appartiennent pas à cette tâche",
            ok: 'OK',
            name_placeholder: 'Entrez le nom de la tâche',
            save: 'Enregistrer',
            total_time: 'Temps Total Utilisé:',
            import: 'Importer des Données',
            export: 'Exporter des Données',
        },
    },

    insights_screen: {
        layout: {
            title: 'Aperçus',
        },
        index: {
            no_data: 'Aucune donnée à afficher',
            duration: 'Durée',
            select_duration: 'Sélectionnez la durée pour voir les aperçus',
            select_duration_label:
                'Sélectionnez la durée pour voir les aperçus',
            daily: "Aujourd'hui",
            weekly: 'Hebdomadaire',
            monthly: 'Mensuel',
            yearly: 'Annuel',
            all: 'Tout',
            all_time: 'Tous les temps',
        },
    },

    themes: {
        title: 'Thème du Système',
        dark_mode: 'Mode Sombre',
        on: 'Activé',
        off: 'Désactivé',
        colors: 'Couleurs',
        orange: 'Orange',
        yellow: 'Jaune',
        green: 'Vert',
        blue: 'Bleu',
        purple: 'Violet',
        pink: 'Rose',
        red: 'Rouge',
    },

    settings: {
        title: 'Paramètres',
        themes: 'Thèmes',
        themes_subtitle: 'Personnalisez votre application',
        goals: 'Objectifs',
        goals_subtitle: 'Définissez vos objectifs',
        tutorial: 'Tutoriel',
        tutorial_subtitle: "Apprenez à utiliser l'application",
    },

    components: {
        task_card: {
            no_time: 'Aucun temps enregistré',
            edit: 'Modifier',
        },
        tag_stat: {
            total_time: 'Temps total: ',
            logs: 'journaux',
            log: 'journal',
        },
        time_format: {
            today: "Aujourd'hui",
            monday: 'Lun',
            tuesday: 'Mar',
            wednesday: 'Mer',
            thursday: 'Jeu',
            friday: 'Ven',
            saturday: 'Sam',
            sunday: 'Dim',
        },
    },

    loading_db: 'Chargement de la base de données...',

    goals_screen: {
        title: 'Les objectifs sont faits pour être atteints!',
        dailyGoalTitile: 'Objectif de temps quotidien',
        on: 'Allumé',
        off: 'Éteint',
        inputPlaceholder: "Entrez l'objectif de temps, par ex. 1h 30m",
        setBtn: 'Définir',
        prevGoalTime: 'Objectif précédent: ',
        notificationTitle: '⏱️ Objectif quotidien',
        notificationMessage:
            'Assurez-vous de compléter votre objectif quotidien!',
        notificationLabel: 'Notification',
        notificationTimeLabel: 'Heure de la notification',
    },

    alert: {
        error: 'Erreur',
        goalSet: 'Objectif défini', // Alert Title
        goalSetMessage: 'Votre objectif a été défini avec succès!', // Alert Message
        ok: 'OK', // Alert Button
        goalSetError: 'Veuillez définir un objectif valide', // Alert Message
        notificationSet: 'Notification définie', // Alert Title
        notificationSetMessage: 'Votre notification a été définie avec succès!', // Alert
    },

    tutorial: {
        skip_btn: 'Passer le Tutoriel',
        next_btn: 'Suivant',
        back_btn: 'Retour',
        finish_btn: 'Terminer',
        step1: {
            title: 'Bienvenue dans Timebrew!',
            description:
                'Timebrew est une application de suivi du temps qui vous aide à suivre le temps passé sur différentes tâches.',
        },
        step2: {
            title: 'Suivez votre temps',
            description:
                'Utilisez le minuteur pour suivre le temps passé sur les tâches.',
        },
        step3: {
            title: 'Consultez vos journaux de temps',
            description:
                'Consultez vos journaux de temps récents sur l’écran d’accueil.',
        },
        step4: {
            title: 'Gérez vos Tâches & Étiquettes',
            description:
                'Vous pouvez gérer vos tâches et étiquettes dans leurs sections respectives.',
        },
        step5: {
            title: 'Obtenez des Aperçus',
            description:
                'Vous pouvez consulter des aperçus sur votre utilisation du temps dans la section Aperçus.',
        },
        step6: {
            title: 'Thèmes, Objectifs & Plus',
            description:
                'Vous pouvez définir des thèmes, des objectifs et plus encore dans la section Paramètres.',
        },
    },
}

const hi: Translation = {
    tracker_screen: {
        layout: {
            tracker: 'ट्रैकर',
            tasks: 'कार्य',
            tags: 'टैग',
            insights: 'जानकारियाँ',
            home: 'मुख्य पृष्ठ',
        },
        index: {
            title: 'लॉग्स',
            no_logs: 'कोई लॉग नहीं मिला',
            questions: 'आपने क्या किया?',
            tags: 'टैग',
            add_tag: 'टैग जोड़ें',
            save_btn: 'सहेजें',
            oops_alert: 'उफ़!',
            error_alert: 'त्रुटि',
            success_alert: 'सफलता',
            no_time: 'लॉग करने का समय नहीं',
            no_task: 'कृपया एक कार्य चुनें',
            task_create_failed: 'कार्य बनाने में विफल',
            log_create_failed: 'टाइमलॉग बनाने में विफल',
            log_create_success: 'टाइमलॉग सफलतापूर्वक बनाया गया',
            tag_create_failed: 'टाइमलॉग टैग बनाने में विफल',
            time_log: 'समय लॉग',
            daily_goal_title: 'आज की प्रगति',
            delete_timelog: 'टाइमलॉग हटाएं',
            delete_timelog_msg: 'क्या आप वाकई इस टाइमलॉग को हटाना चाहते हैं?',
            cancel: 'रद्द करें',
            delete: 'हटाएं',
            delete_success: 'सफलता',
            delete_timelog_success: 'टाइमलॉग हटाया गया',
            delete_failed: 'त्रुटि',
            delete_timelog_failed: 'टाइमलॉग हटाने में विफल',
        },
        poromodo: {
            break_title: 'फोकस सत्र पूरा हुआ',
            break_msg: 'आराम करने का समय!',
            break_complete: 'ब्रेक सत्र पूरा हुआ',
            break_complete_msg: 'फोकस करने का समय!',
            continue: 'जारी रखें',
            end_pomodoro: 'पॉमोडोरो समाप्त करें',
            stop_pomodoro: 'पॉमोडोरो छोड़ें',
            stop_pomodoro_msg: 'यह पॉमोडोरो टाइमर को रोक देगा।',
            yes: 'हां',
            no: 'नहीं',
            break: 'विराम',
            pause: 'रोकें',
        },
    },
    tag_screen: {
        layout: {
            title: 'टैग्स',
            add_tags: 'टैग जोड़ें',
        },
        index: {
            title: 'टैग्स',
        },
        add: {
            title: 'टैग जोड़ें',
            edit_tag: 'टैग संपादित करें',
            create_tag: 'नया टैग बनाएं',
            tag_name: 'टैग नाम',
            tag_color: 'टैग रंग',
            name_required: 'नाम आवश्यक है',
            color_required: 'रंग आवश्यक है',
            save_btn: 'सहेजें',
            delete_btn: 'हटाएं',
            delete_alert: 'टैग हटाएं',
            delete_alert_msg: 'क्या आप वाकई इस टैग को हटाना चाहते हैं?',
            cancel: 'रद्द करें',
            delete: 'टैग हटाएं',
            tag_create_failed: 'टैग बनाने में विफल',
            tag_create_success: 'टैग सफलतापूर्वक बनाया गया',
            tag_update_failed: 'टैग अपडेट करने में विफल',
            tag_update_success: 'टैग सफलतापूर्वक अपडेट किया गया',
            tag_delete_failed: 'टैग हटाने में विफल',
            tag_delete_success: 'टैग सफलतापूर्वक हटाया गया',
            place_holder: 'उदाहरण: काम, व्यक्तिगत, अध्ययन, आदि।',
            error: 'त्रुटि',
            requires: 'नाम और रंग आवश्यक हैं',
            no_time: 'कोई समय लॉग नहीं किया गया',
        },
    },

    task_screen: {
        index: {
            title: 'कार्य',
            all_tasks: 'सभी कार्य',
            edit: 'कार्य संपादित करें',
            add: 'कार्य जोड़ें',
        },
        add: {
            desc_alert: 'कार्य विवरण आवश्यक है',
            name_placeholder: 'कार्य का नाम दर्ज करें',
            save: 'सहेजें',
            label: 'कार्य का नाम',
        },
        edit: {
            label: 'कार्य का नाम',
            delete_alert_title: 'कार्य हटाएं',
            delete_alert_msg:
                'यह सभी संबंधित समय रिकॉर्ड्स को हटा देगा। क्या आप इस कार्य को हटाना चाहते हैं?',
            cancel: 'रद्द करें',
            delete: 'हटाएं',
            error: 'त्रुटि',
            error_msg: 'ये समय रिकॉर्ड इस कार्य से संबंधित नहीं हैं',
            ok: 'ठीक है',
            name_placeholder: 'कार्य का नाम दर्ज करें',
            save: 'सहेजें',
            total_time: 'कुल उपयोग समय:',
            import: 'डेटा आयात करें',
            export: 'डेटा निर्यात करें',
        },
    },

    insights_screen: {
        layout: {
            title: 'जानकारियाँ',
        },
        index: {
            no_data: 'दिखाने के लिए कोई डेटा नहीं है',
            duration: 'अवधि',
            select_duration: 'जानकारियाँ देखने के लिए अवधि चुनें',
            select_duration_label: 'जानकारियाँ देखने के लिए अवधि चुनें',
            daily: 'आज',
            weekly: 'साप्ताहिक',
            monthly: 'मासिक',
            yearly: 'वार्षिक',
            all: 'सभी',
            all_time: 'सभी समय',
        },
    },

    themes: {
        title: 'सिस्टम थीम',
        dark_mode: 'डार्क मोड',
        on: 'चालू',
        off: 'बंद',
        colors: 'रंग',
        orange: 'नारंगी',
        yellow: 'पीला',
        green: 'हरा',
        blue: 'नीला',
        purple: 'बैंगनी',
        pink: 'गुलाबी',
        red: 'लाल',
    },

    settings: {
        title: 'सेटिंग्स',
        themes: 'थीम्स',
        themes_subtitle: 'अपने ऐप को व्यक्तिगत बनाएं',
        goals: 'लक्ष्य',
        goals_subtitle: 'अपने लक्ष्य निर्धारित करें',
        tutorial: 'ट्यूटोरियल',
        tutorial_subtitle: 'ऐप का उपयोग कैसे करें सीखें',
    },

    components: {
        task_card: {
            no_time: 'कोई समय लॉग नहीं किया गया',
            edit: 'संपादित करें',
        },
        tag_stat: {
            total_time: 'कुल समय: ',
            logs: 'लॉग्स',
            log: 'लॉग',
        },
        time_format: {
            today: 'आज',
            monday: 'सोम',
            tuesday: 'मंगल',
            wednesday: 'बुध',
            thursday: 'गुरु',
            friday: 'शुक्र',
            saturday: 'शनि',
            sunday: 'रवि',
        },
    },

    loading_db: 'डेटाबेस लोड हो रहा है...',

    goals_screen: {
        title: 'लक्ष्य प्राप्त करने के लिए बनाए गए हैं!',
        dailyGoalTitile: 'दैनिक समय लक्ष्य',
        on: 'चालू',
        off: 'बंद',
        inputPlaceholder: 'समय लक्ष्य दर्ज करें, जैसे 1h 30m',
        setBtn: 'सेट करें',
        prevGoalTime: 'पिछला लक्ष्य: ',
        notificationTitle: '⏱️ दैनिक लक्ष्य',
        notificationMessage:
            'कृपया अपने दैनिक लक्ष्य को पूरा करने की सुनिश्चित करें!',
        notificationLabel: 'सूचना',
        notificationTimeLabel: 'सूचना समय',
    },

    alert: {
        error: 'त्रुटि',
        goalSet: 'लक्ष्य सेट किया गया', // Alert Title
        goalSetMessage: 'आपका लक्ष्य सफलतापूर्वक सेट कर दिया गया है!', // Alert Message
        ok: 'ठीक है', // Alert Button
        goalSetError: 'कृपया एक वैध लक्ष्य सेट करें', // Alert Message
        notificationSet: 'सूचना सेट की गई', // Alert Title
        notificationSetMessage: 'आपकी सूचना सफलतापूर्वक सेट की गई है!', // Alert
    },

    tutorial: {
        skip_btn: 'ट्यूटोरियल छोड़ें',
        next_btn: 'आगे',
        back_btn: 'पीछे',
        finish_btn: 'समाप्त',
        step1: {
            title: 'Timebrew में आपका स्वागत है!',
            description:
                'टाइमब्रू एक समय ट्रैकिंग ऐप है जो आपको विभिन्न कार्यों पर बिताए गए समय का पालन करने में मदद करता है।',
        },
        step2: {
            title: 'अपना समय ट्रैक करें',
            description:
                'कार्यों पर बिताए गए समय को ट्रैक करने के लिए टाइमर का उपयोग करें।',
        },
        step3: {
            title: 'अपने समय लॉग देखें',
            description: 'मुख्य पृष्ठ पर अपने हाल के समय लॉग देखें।',
        },
        step4: {
            title: 'अपने कार्य और टैग प्रबंधित करें',
            description:
                'आप अपने कार्य और टैग को उनके संबंधित खंडों में प्रबंधित कर सकते हैं।',
        },
        step5: {
            title: 'विस्तृत जानकारी प्राप्त करें',
            description:
                'अपने समय उपयोग के बारे में विस्तृत जानकारी प्राप्त करें।',
        },
        step6: {
            title: 'थीम, लक्ष्य और अधिक',
            description:
                'आप सेटिंग्स खंड में थीम, लक्ष्य और अधिक को सेट कर सकते हैं।',
        },
    },
}

const es: Translation = {
    tracker_screen: {
        layout: {
            tracker: 'Rastreador',
            tasks: 'Tareas',
            tags: 'Etiquetas',
            insights: 'Perspectivas',
            home: 'Inicio',
        },
        index: {
            title: 'Registros',
            no_logs: 'No se encontraron registros',
            questions: '¿Qué hiciste?',
            tags: 'Etiquetas',
            add_tag: 'Añadir etiqueta',
            save_btn: 'Guardar',
            oops_alert: '¡Vaya!',
            error_alert: 'Error',
            success_alert: 'Éxito',
            no_time: 'No hay tiempo para registrar',
            no_task: 'Por favor seleccione una tarea',
            task_create_failed: 'Fallo al crear la tarea',
            log_create_failed: 'Fallo al crear el registro de tiempo',
            log_create_success: 'Registro de tiempo creado con éxito',
            tag_create_failed:
                'Fallo al crear la etiqueta de registro de tiempo',
            time_log: 'Registro de tiempo',
            daily_goal_title: 'Progreso de hoy',
            delete_timelog: 'Eliminar registro de tiempo',
            delete_timelog_msg:
                '¿Estás seguro de que quieres eliminar este registro de tiempo?',
            cancel: 'Cancelar',
            delete: 'Eliminar',
            delete_success: 'Éxito',
            delete_timelog_success: 'Registro de tiempo eliminado',
            delete_failed: 'Error',
            delete_timelog_failed: 'No se pudo eliminar el registro de tiempo',
        },
        poromodo: {
            break_title: 'Sesión de enfoque completada',
            break_msg: '¡Es hora de tomar un descanso!',
            break_complete: 'Sesión de descanso completada',
            break_complete_msg: '¡Es hora de enfocarse!',
            continue: 'Continuar',
            end_pomodoro: 'Terminar Pomodoro',
            stop_pomodoro: 'Dejar Pomodoro',
            stop_pomodoro_msg: 'Esto detendrá el temporizador Pomodoro.',
            yes: 'Sí',
            no: 'No',
            break: 'Descanso',
            pause: 'Pausa',
        },
    },
    tag_screen: {
        layout: {
            title: 'Etiquetas',
            add_tags: 'Añadir etiqueta',
        },
        index: {
            title: 'Etiquetas',
        },
        add: {
            title: 'Añadir etiqueta',
            edit_tag: 'Editar etiqueta',
            create_tag: 'Crear nueva etiqueta',
            tag_name: 'Nombre de la etiqueta',
            tag_color: 'Color de la etiqueta',
            name_required: 'El nombre es obligatorio',
            color_required: 'El color es obligatorio',
            save_btn: 'Guardar',
            delete_btn: 'Eliminar',
            delete_alert: 'Eliminar etiqueta',
            delete_alert_msg:
                '¿Estás seguro de que quieres eliminar esta etiqueta?',
            cancel: 'Cancelar',
            delete: 'Eliminar etiqueta',
            tag_create_failed: 'Fallo al crear la etiqueta',
            tag_create_success: 'Etiqueta creada con éxito',
            tag_update_failed: 'Fallo al actualizar la etiqueta',
            tag_update_success: 'Etiqueta actualizada con éxito',
            tag_delete_failed: 'Fallo al eliminar la etiqueta',
            tag_delete_success: 'Etiqueta eliminada con éxito',
            place_holder: 'Ej.: trabajo, personal, estudio, etc.',
            error: 'Error',
            requires: 'El nombre y el color son obligatorios',
            no_time: 'No hay tiempo registrado',
        },
    },

    task_screen: {
        index: {
            title: 'Tareas',
            all_tasks: 'Todas las tareas',
            edit: 'Editar tarea',
            add: 'Añadir tarea',
        },
        add: {
            desc_alert: 'La descripción de la tarea es obligatoria',
            name_placeholder: 'Ingrese el nombre de la tarea',
            save: 'Guardar',
            label: 'Nombre de la tarea',
        },
        edit: {
            label: 'Nombre de la tarea',
            delete_alert_title: 'Eliminar tarea',
            delete_alert_msg:
                'Esto eliminará todos los registros de tiempo relacionados. ¿Estás seguro de que quieres eliminar esta tarea?',
            cancel: 'Cancelar',
            delete: 'Eliminar',
            error: 'Error',
            error_msg: 'Estos registros de tiempo no pertenecen a esta tarea',
            ok: 'OK',
            name_placeholder: 'Ingrese el nombre de la tarea',
            save: 'Guardar',
            total_time: 'Tiempo total utilizado:',
            import: 'Importar datos',
            export: 'Exportar datos',
        },
    },

    insights_screen: {
        layout: {
            title: 'Perspectivas',
        },
        index: {
            no_data: 'No hay datos para mostrar',
            duration: 'Duración',
            select_duration: 'Seleccione la duración para ver las perspectivas',
            select_duration_label:
                'Seleccione la duración para ver las perspectivas',
            daily: 'Hoy',
            weekly: 'Semanal',
            monthly: 'Mensual',
            yearly: 'Anual',
            all: 'Todo',
            all_time: 'Todo el tiempo',
        },
    },

    themes: {
        title: 'Tema del sistema',
        dark_mode: 'Modo oscuro',
        on: 'Encendido',
        off: 'Apagado',
        colors: 'Colores',
        orange: 'Naranja',
        yellow: 'Amarillo',
        green: 'Verde',
        blue: 'Azul',
        purple: 'Púrpura',
        pink: 'Rosa',
        red: 'Rojo',
    },

    settings: {
        title: 'Configuraciones',
        themes: 'Temas',
        themes_subtitle: 'Personaliza tu aplicación',
        goals: 'Metas',
        goals_subtitle: 'Establece tus metas',
        tutorial: 'Tutorial',
        tutorial_subtitle: 'Aprende a usar la aplicación',
    },

    components: {
        task_card: {
            no_time: 'No hay tiempo registrado',
            edit: 'Editar',
        },
        tag_stat: {
            total_time: 'Tiempo total: ',
            logs: 'registros',
            log: 'registro',
        },
        time_format: {
            today: 'Hoy',
            monday: 'Lun',
            tuesday: 'Mar',
            wednesday: 'Mié',
            thursday: 'Jue',
            friday: 'Vie',
            saturday: 'Sáb',
            sunday: 'Dom',
        },
    },

    loading_db: 'Cargando base de datos...',

    goals_screen: {
        title: '¡Las metas están hechas para lograrse!',
        dailyGoalTitile: 'Meta de tiempo diaria',
        on: 'Encendido',
        off: 'Apagado',
        inputPlaceholder: 'Ingrese el objetivo de tiempo, ej. 1h 30m',
        setBtn: 'Establecer',
        prevGoalTime: 'Meta anterior: ',
        notificationTitle: '⏱️ Meta diaria',
        notificationMessage: '¡Asegúrese de completar su meta diaria!',
        notificationLabel: 'Notificación',
        notificationTimeLabel: 'Hora de la notificación',
    },

    alert: {
        error: 'Error',
        goalSet: 'Meta establecida', // Alert Title
        goalSetMessage: '¡Su meta ha sido establecida con éxito!', // Alert Message
        ok: 'OK', // Alert Button
        goalSetError: 'Por favor establezca una meta válida', // Alert Message
        notificationSet: 'Notificación establecida', // Alert Title
        notificationSetMessage: '¡Su notificación ha sido establecida con éxito!', // Alert
    },

    tutorial: {
        skip_btn: 'Saltar Tutorial',
        next_btn: 'Siguiente',
        back_btn: 'Atrás',
        finish_btn: 'Finalizar',
        step1: {
            title: '¡Bienvenido a Timebrew!',
            description:
                'Timebrew es una aplicación de seguimiento del tiempo que te ayuda a rastrear el tiempo dedicado a diferentes tareas.',
        },
        step2: {
            title: 'Rastrea tu tiempo',
            description:
                'Utiliza el temporizador para rastrear el tiempo dedicado a las tareas.',
        },
        step3: {
            title: 'Consulta tus registros de tiempo',
            description:
                'Consulta tus registros de tiempo recientes en la pantalla de inicio.',
        },
        step4: {
            title: 'Administra tus Tareas y Etiquetas',
            description:
                'Puedes administrar tus tareas y etiquetas en sus respectivas secciones.',
        },
        step5: {
            title: 'Obtén Perspectivas',
            description:
                'Puedes consultar perspectivas sobre tu uso del tiempo en la sección de Perspectivas.',
        },
        step6: {
            title: 'Temas, Metas y Más',
            description:
                'Puedes configurar temas, metas y más en la sección de Configuración.',
        },
    },
}

const zh: Translation = {
    tracker_screen: {
        layout: {
            tracker: '追踪器',
            tasks: '任务',
            tags: '标签',
            insights: '洞察',
            home: '主页',
        },
        index: {
            title: '日志',
            no_logs: '没有找到日志',
            questions: '你做了什么?',
            tags: '标签',
            add_tag: '添加标签',
            save_btn: '保存',
            oops_alert: '哎呀!',
            error_alert: '错误',
            success_alert: '成功',
            no_time: '没有时间记录',
            no_task: '请选择一个任务',
            task_create_failed: '创建任务失败',
            log_create_failed: '创建时间日志失败',
            log_create_success: '时间日志创建成功',
            tag_create_failed: '创建时间日志标签失败',
            time_log: '时间日志',
            daily_goal_title: '今天的进度',
            delete_timelog: '删除时间日志',
            delete_timelog_msg: '您确定要删除此时间日志吗？',
            cancel: '取消',
            delete: '删除',
            delete_success: '成功',
            delete_timelog_success: '时间日志已删除',
            delete_failed: '错误',
            delete_timelog_failed: '删除时间日志失败',
        },
        poromodo: {
            break_title: '专注会话完成',
            break_msg: '是时候休息了!',
            break_complete: '休息会话完成',
            break_complete_msg: '是时候专注了!',
            continue: '继续',
            end_pomodoro: '结束番茄钟',
            stop_pomodoro: '离开番茄钟',
            stop_pomodoro_msg: '这将停止番茄钟计时器。',
            yes: '是',
            no: '否',
            break: '休息',
            pause: '暂停',
        },
    },
    tag_screen: {
        layout: {
            title: '标签',
            add_tags: '添加标签',
        },
        index: {
            title: '标签',
        },
        add: {
            title: '添加标签',
            edit_tag: '编辑标签',
            create_tag: '创建新标签',
            tag_name: '标签名称',
            tag_color: '标签颜色',
            name_required: '名称是必需的',
            color_required: '颜色是必需的',
            save_btn: '保存',
            delete_btn: '删除',
            delete_alert: '删除标签',
            delete_alert_msg: '你确定要删除这个标签吗?',
            cancel: '取消',
            delete: '删除标签',
            tag_create_failed: '创建标签失败',
            tag_create_success: '标签创建成功',
            tag_update_failed: '更新标签失败',
            tag_update_success: '标签更新成功',
            tag_delete_failed: '删除标签失败',
            tag_delete_success: '标签删除成功',
            place_holder: '例如：工作，个人，学习等。',
            error: '错误',
            requires: '名称和颜色是必需的',
            no_time: '没有时间记录',
        },
    },

    task_screen: {
        index: {
            title: '任务',
            all_tasks: '所有任务',
            edit: '编辑任务',
            add: '添加任务',
        },
        add: {
            desc_alert: '任务描述是必需的',
            name_placeholder: '输入任务名称',
            save: '保存',
            label: '任务名称',
        },
        edit: {
            label: '任务名称',
            delete_alert_title: '删除任务',
            delete_alert_msg:
                '这将删除所有相关的时间记录。你确定要删除这个任务吗?',
            cancel: '取消',
            delete: '删除',
            error: '错误',
            error_msg: '这些时间记录不属于这个任务',
            ok: '好的',
            name_placeholder: '输入任务名称',
            save: '保存',
            total_time: '使用的总时间:',
            import: '导入数据',
            export: '导出数据',
        },
    },

    insights_screen: {
        layout: {
            title: '洞察',
        },
        index: {
            no_data: '没有数据显示',
            duration: '持续时间',
            select_duration: '选择持续时间以查看洞察',
            select_duration_label: '选择持续时间以查看洞察',
            daily: '今天',
            weekly: '每周',
            monthly: '每月',
            yearly: '每年',
            all: '全部',
            all_time: '所有时间',
        },
    },

    themes: {
        title: '系统主题',
        dark_mode: '黑暗模式',
        on: '开启',
        off: '关闭',
        colors: '颜色',
        orange: '橙色',
        yellow: '黄色',
        green: '绿色',
        blue: '蓝色',
        purple: '紫色',
        pink: '粉色',
        red: '红色',
    },

    settings: {
        title: '设置',
        themes: '主题',
        themes_subtitle: '自定义您的应用程序',
        goals: '目标',
        goals_subtitle: '设定您的目标',
        tutorial: '教程',
        tutorial_subtitle: '学习如何使用应用程序',
    },

    components: {
        task_card: {
            no_time: '没有时间记录',
            edit: '编辑',
        },
        tag_stat: {
            total_time: '总时间: ',
            logs: '日志',
            log: '日志',
        },
        time_format: {
            today: '今天',
            monday: '周一',
            tuesday: '周二',
            wednesday: '周三',
            thursday: '周四',
            friday: '周五',
            saturday: '周六',
            sunday: '周日',
        },
    },

    loading_db: '加载数据库...',

    goals_screen: {
        title: '目标是为了实现!',
        dailyGoalTitile: '每日时间目标',
        on: '开',
        off: '关',
        inputPlaceholder: '输入时间目标，例如 1小时 30分钟',
        setBtn: '设置',
        prevGoalTime: '上一个目标: ',
        notificationTitle: '⏱️ 每日目标',
        notificationMessage: '确保完成您的每日目标!',
        notificationLabel: '通知',
        notificationTimeLabel: '通知时间',
    },

    alert: {
        error: '错误',
        goalSet: '目标已设置', // Alert Title
        goalSetMessage: '您的目标已成功设置!', // Alert Message
        ok: 'OK', // Alert Button
        goalSetError: '请设置有效目标', // Alert Message
        notificationSet: '通知设置', // Alert Title
        notificationSetMessage: '您的通知已成功设置!', // Alert
    },

    tutorial: {
        skip_btn: '跳过教程',
        next_btn: '下一个',
        back_btn: '返回',
        finish_btn: '完成',
        step1: {
            title: '欢迎来到 Timebrew!',
            description:
                'Timebrew 是一个时间跟踪应用，可以帮助您跟踪不同任务所花费的时间。',
        },
        step2: {
            title: '跟踪您的时间',
            description: '使用计时器跟踪用于任务的时间。',
        },
        step3: {
            title: '查看您的时间记录',
            description: '在主屏幕上查看您最近的时间记录。',
        },
        step4: {
            title: '管理您的任务和标签',
            description: '您可以在各自的部分中管理您的任务和标签。',
        },
        step5: {
            title: '获取洞察',
            description: '在洞察部分查看关于您时间使用情况的洞察。',
        },
        step6: {
            title: '主题、目标和更多',
            description: '您可以在设置部分设置主题、目标和更多。',
        },
    },
}

const ko: Translation = {
    tracker_screen: {
        layout: {
            tracker: '트래커',
            tasks: '작업',
            tags: '태그',
            insights: '인사이트',
            home: '홈',
        },
        index: {
            title: '로그',
            no_logs: '로그가 없습니다',
            questions: '무엇을 하셨나요?',
            tags: '태그',
            add_tag: '태그 추가',
            save_btn: '저장',
            oops_alert: '이런!',
            error_alert: '오류',
            success_alert: '성공',
            no_time: '기록할 시간이 없습니다',
            no_task: '작업을 선택해주세요',
            task_create_failed: '작업 생성 실패',
            log_create_failed: '타임로그 생성 실패',
            log_create_success: '타임로그가 성공적으로 생성되었습니다',
            tag_create_failed: '타임로그 태그 생성 실패',
            time_log: '시간 기록',
            daily_goal_title: '오늘의 진행 상황',
            delete_timelog: '타임로그 삭제',
            delete_timelog_msg: '이 타임로그를 삭제하시겠습니까?',
            cancel: '취소',
            delete: '삭제',
            delete_success: '성공',
            delete_timelog_success: '타임로그가 삭제되었습니다',
            delete_failed: '오류',
            delete_timelog_failed: '타임로그 삭제 실패',
        },
        poromodo: {
            break_title: '포커스 세션 완료',
            break_msg: '쉬는 시간이 되었습니다!',
            break_complete: '쉬는 세션 완료',
            break_complete_msg: '집중할 시간입니다!',
            continue: '계속',
            end_pomodoro: '포모도로 종료',
            stop_pomodoro: '포모도로 나가기',
            stop_pomodoro_msg: '이 작업은 포모도로 타이머를 중지합니다.',
            yes: '예',
            no: '아니요',
            break: '휴식',
            pause: '일시정지',
        },
    },
    tag_screen: {
        layout: {
            title: '태그',
            add_tags: '태그 추가',
        },
        index: {
            title: '태그',
        },
        add: {
            title: '태그 추가',
            edit_tag: '태그 편집',
            create_tag: '새 태그 생성',
            tag_name: '태그 이름',
            tag_color: '태그 색상',
            name_required: '이름은 필수입니다',
            color_required: '색상은 필수입니다',
            save_btn: '저장',
            delete_btn: '삭제',
            delete_alert: '태그 삭제',
            delete_alert_msg: '이 태그를 삭제하시겠습니까?',
            cancel: '취소',
            delete: '태그 삭제',
            tag_create_failed: '태그 생성 실패',
            tag_create_success: '태그가 성공적으로 생성되었습니다',
            tag_update_failed: '태그 업데이트 실패',
            tag_update_success: '태그가 성공적으로 업데이트되었습니다',
            tag_delete_failed: '태그 삭제 실패',
            tag_delete_success: '태그가 성공적으로 삭제되었습니다',
            place_holder: '예: 작업, 개인, 공부 등',
            error: '오류',
            requires: '이름과 색상은 필수입니다',
            no_time: '기록된 시간이 없습니다',
        },
    },

    task_screen: {
        index: {
            title: '작업',
            all_tasks: '모든 작업',
            edit: '작업 편집',
            add: '작업 추가',
        },
        add: {
            desc_alert: '작업 설명은 필수입니다',
            name_placeholder: '작업 이름을 입력하세요',
            save: '저장',
            label: '작업 이름',
        },
        edit: {
            label: '작업 이름',
            delete_alert_title: '작업 삭제',
            delete_alert_msg:
                '이 작업을 삭제하면 모든 관련 시간 기록이 삭제됩니다. 이 작업을 삭제하시겠습니까?',
            cancel: '취소',
            delete: '삭제',
            error: '오류',
            error_msg: '이 시간 기록은 이 작업에 속하지 않습니다',
            ok: '확인',
            name_placeholder: '작업 이름을 입력하세요',
            save: '저장',
            total_time: '총 사용 시간:',
            import: '데이터 가져오기',
            export: '데이터 내보내기',
        },
    },

    insights_screen: {
        layout: {
            title: '인사이트',
        },
        index: {
            no_data: '표시할 데이터가 없습니다',
            duration: '기간',
            select_duration: '인사이트를 보려면 기간을 선택하세요',
            select_duration_label: '인사이트를 보려면 기간을 선택하세요',
            daily: '오늘',
            weekly: '주간',
            monthly: '월간',
            yearly: '연간',
            all: '전체',
            all_time: '전체 시간',
        },
    },

    themes: {
        title: '시스템 테마',
        dark_mode: '다크 모드',
        on: '켜짐',
        off: '꺼짐',
        colors: '색상',
        orange: '주황색',
        yellow: '노란색',
        green: '녹색',
        blue: '파란색',
        purple: '보라색',
        pink: '분홍색',
        red: '빨간색',
    },

    settings: {
        title: '설정',
        themes: '테마',
        themes_subtitle: '앱을 사용자 정의하세요',
        goals: '목표',
        goals_subtitle: '목표 설정',
        tutorial: '튜토리얼',
        tutorial_subtitle: '앱 사용 방법 배우기',
    },

    components: {
        task_card: {
            no_time: '기록된 시간이 없습니다',
            edit: '편집',
        },
        tag_stat: {
            total_time: '총 시간: ',
            logs: '로그',
            log: '로그',
        },
        time_format: {
            today: '오늘',
            monday: '월',
            tuesday: '화',
            wednesday: '수',
            thursday: '목',
            friday: '금',
            saturday: '토',
            sunday: '일',
        },
    },

    loading_db: '데이터베이스 로드 중...',

    goals_screen: {
        title: '목표는 달성하기 위해서입니다!',
        dailyGoalTitile: '일일 시간 목표',
        on: '켜짐',
        off: '꺼짐',
        inputPlaceholder: '시간 목표 입력, 예: 1시간 30분',
        setBtn: '설정',
        prevGoalTime: '이전 목표: ',
        notificationTitle: '⏱️ 일일 목표',
        notificationMessage: '일일 목표를 달성하도록 확인하세요!',
        notificationLabel: '알림',
        notificationTimeLabel: '알림 시간',
    },

    alert: {
        error: '오류',
        goalSet: '목표 설정됨', // Alert Title
        goalSetMessage: '목표가 성공적으로 설정되었습니다!', // Alert Message
        ok: 'OK', // Alert Button
        goalSetError: '유효한 목표를 설정하십시오', // Alert Message
        notificationSet: '알림 설정됨', // Alert Title
        notificationSetMessage: '알림이 성공적으로 설정되었습니다!', // Alert
    },

    tutorial: {
        skip_btn: '튜토리얼 건너뛰기',
        next_btn: '다음',
        back_btn: '뒤로',
        finish_btn: '완료',
        step1: {
            title: 'Timebrew에 오신 것을 환영합니다!',
            description:
                'Timebrew는 다양한 작업에 사용된 시간을 추적하는 데 도움이 되는 시간 추적 앱입니다.',
        },
        step2: {
            title: '시간 추적',
            description:
                '작업에 사용된 시간을 추적하려면 타이머를 사용하십시오.',
        },
        step3: {
            title: '시간 기록 확인',
            description: '홈 화면에서 최근 시간 기록을 확인하십시오.',
        },
        step4: {
            title: '작업 및 태그 관리',
            description: '각 섹션에서 작업 및 태그를 관리할 수 있습니다.',
        },
        step5: {
            title: '인사이트 얻기',
            description:
                '인사이트 섹션에서 시간 사용에 대한 인사이트를 확인할 수 있습니다.',
        },
        step6: {
            title: '테마, 목표 및 기타',
            description:
                '설정 섹션에서 테마, 목표 및 기타를 설정할 수 있습니다.',
        },
    },
}

const ja: Translation = {
    tracker_screen: {
        layout: {
            tracker: 'トラッカー',
            tasks: 'タスク',
            tags: 'タグ',
            insights: 'インサイト',
            home: 'ホーム',
        },
        index: {
            title: 'ログ',
            no_logs: 'ログが見つかりません',
            questions: '何をしましたか?',
            tags: 'タグ',
            add_tag: 'タグを追加',
            save_btn: '保存',
            oops_alert: 'おっと!',
            error_alert: 'エラー',
            success_alert: '成功',
            no_time: 'ログする時間がありません',
            no_task: 'タスクを選択してください',
            task_create_failed: 'タスクの作成に失敗しました',
            log_create_failed: 'タイムログの作成に失敗しました',
            log_create_success: 'タイムログが正常に作成されました',
            tag_create_failed: 'タイムログタグの作成に失敗しました',
            time_log: 'タイムログ',
            daily_goal_title: '今日の進捗',
            delete_timelog: 'タイムログを削除',
            delete_timelog_msg: 'このタイムログを削除してもよろしいですか？',
            cancel: 'キャンセル',
            delete: '削除',
            delete_success: '成功',
            delete_timelog_success: 'タイムログが削除されました',
            delete_failed: 'エラー',
            delete_timelog_failed: 'タイムログの削除に失敗しました',
        },
        poromodo: {
            break_title: 'フォーカスセッション完了',
            break_msg: '休憩の時間です！',
            break_complete: '休憩セッション完了',
            break_complete_msg: '集中する時間です！',
            continue: '続ける',
            end_pomodoro: 'ポモドーロ終了',
            stop_pomodoro: 'ポモドーロを終了',
            stop_pomodoro_msg: 'これによりポモドーロタイマーが停止します。',
            yes: 'はい',
            no: 'いいえ',
            break: '休憩',
            pause: '一時停止',
        },
    },
    tag_screen: {
        layout: {
            title: 'タグ',
            add_tags: 'タグを追加',
        },
        index: {
            title: 'タグ',
        },
        add: {
            title: 'タグを追加',
            edit_tag: 'タグを編集',
            create_tag: '新しいタグを作成',
            tag_name: 'タグ名',
            tag_color: 'タグカラー',
            name_required: '名前は必須です',
            color_required: 'カラーは必須です',
            save_btn: '保存',
            delete_btn: '削除',
            delete_alert: 'タグを削除',
            delete_alert_msg: 'このタグを削除してもよろしいですか？',
            cancel: 'キャンセル',
            delete: 'タグを削除',
            tag_create_failed: 'タグの作成に失敗しました',
            tag_create_success: 'タグが正常に作成されました',
            tag_update_failed: 'タグの更新に失敗しました',
            tag_update_success: 'タグが正常に更新されました',
            tag_delete_failed: 'タグの削除に失敗しました',
            tag_delete_success: 'タグが正常に削除されました',
            place_holder: '例：仕事、個人、勉強など。',
            error: 'エラー',
            requires: '名前とカラーは必須です',
            no_time: 'ログされた時間がありません',
        },
    },

    task_screen: {
        index: {
            title: 'タスク',
            all_tasks: 'すべてのタスク',
            edit: 'タスクを編集',
            add: 'タスクを追加',
        },
        add: {
            desc_alert: 'タスクの説明は必須です',
            name_placeholder: 'タスク名を入力してください',
            save: '保存',
            label: 'タスク名',
        },
        edit: {
            label: 'タスク名',
            delete_alert_title: 'タスクを削除',
            delete_alert_msg:
                'これによりすべての関連する時間記録が削除されます。このタスクを削除してもよろしいですか？',
            cancel: 'キャンセル',
            delete: '削除',
            error: 'エラー',
            error_msg: 'これらの時間記録はこのタスクに属していません',
            ok: 'OK',
            name_placeholder: 'タスク名を入力してください',
            save: '保存',
            total_time: '使用した総時間:',
            import: 'データをインポート',
            export: 'データをエクスポート',
        },
    },

    insights_screen: {
        layout: {
            title: 'インサイト',
        },
        index: {
            no_data: '表示するデータがありません',
            duration: '期間',
            select_duration: 'インサイトを見るために期間を選択してください',
            select_duration_label:
                'インサイトを見るために期間を選択してください',
            daily: '今日',
            weekly: '週間',
            monthly: '月間',
            yearly: '年間',
            all: 'すべて',
            all_time: '全期間',
        },
    },

    themes: {
        title: 'システムテーマ',
        dark_mode: 'ダークモード',
        on: 'オン',
        off: 'オフ',
        colors: 'カラー',
        orange: 'オレンジ',
        yellow: 'イエロー',
        green: 'グリーン',
        blue: 'ブルー',
        purple: 'パープル',
        pink: 'ピンク',
        red: 'レッド',
    },

    settings: {
        title: '設定',
        themes: 'テーマ',
        themes_subtitle: 'アプリをカスタマイズする',
        goals: '目標',
        goals_subtitle: '目標を設定する',
        tutorial: 'チュートリアル',
        tutorial_subtitle: 'アプリの使い方を学ぶ',
    },

    components: {
        task_card: {
            no_time: 'ログされた時間がありません',
            edit: '編集',
        },
        tag_stat: {
            total_time: '総時間: ',
            logs: 'ログ',
            log: 'ログ',
        },
        time_format: {
            today: '今日',
            monday: '月',
            tuesday: '火',
            wednesday: '水',
            thursday: '木',
            friday: '金',
            saturday: '土',
            sunday: '日',
        },
    },

    loading_db: 'データベースをロードしています...',

    goals_screen: {
        title: '目標は達成するために作られています！',
        dailyGoalTitile: '毎日の目標時間',
        on: 'オン',
        off: 'オフ',
        inputPlaceholder: '目標時間を入力してください, 例: 1時間 30分',
        setBtn: '設定',
        prevGoalTime: '前の目標: ',
        notificationTitle: '⏱️ 毎日の目標',
        notificationMessage: '毎日の目標を達成するようにしてください！',
        notificationLabel: '通知',
        notificationTimeLabel: '通知時間',
    },

    alert: {
        error: 'エラー',
        goalSet: '目標設定', // Alert Title
        goalSetMessage: '目標が正常に設定されました!', // Alert Message
        ok: 'OK', // Alert Button
        goalSetError: '有効な目標を設定してください', // Alert Message
        notificationSet: '通知設定', // Alert Title
        notificationSetMessage: '通知が正常に設定されました!', // Alert
    },

    tutorial: {
        skip_btn: 'チュートリアルをスキップ',
        next_btn: '次へ',
        back_btn: '戻る',
        finish_btn: '完了',
        step1: {
            title: 'Timebrewへようこそ!',
            description:
                'Timebrewは、さまざまなタスクに費やされた時間を追跡するのに役立つタイムトラッキングアプリです。',
        },
        step2: {
            title: '時間を追跡する',
            description:
                'タイマーを使用してタスクに費やされた時間を追跡します。',
        },
        step3: {
            title: '時間記録を確認する',
            description: 'ホーム画面で最近の時間記録を確認します。',
        },
        step4: {
            title: 'タスクとタグを管理する',
            description: '各セクションでタスクとタグを管理できます。',
        },
        step5: {
            title: 'インサイトを得る',
            description:
                'インサイトセクションで時間の使用に関するインサイトを確認できます。',
        },
        step6: {
            title: 'テーマ、目標、その他',
            description: '設定セクションでテーマ、目標、その他を設定できます。',
        },
    },
}

const de: Translation = {
    tracker_screen: {
        layout: {
            tracker: 'Tracker',
            tasks: 'Aufgaben',
            tags: 'Tags',
            insights: 'Einblicke',
            home: 'Startseite',
        },
        index: {
            title: 'Protokolle',
            no_logs: 'Keine Protokolle gefunden',
            questions: 'Was hast du gemacht?',
            tags: 'Tags',
            add_tag: 'Tag hinzufügen',
            save_btn: 'Speichern',
            oops_alert: 'Hoppla!',
            error_alert: 'Fehler',
            success_alert: 'Erfolg',
            no_time: 'Keine Zeit zum Protokollieren',
            no_task: 'Bitte wähle eine Aufgabe aus',
            task_create_failed: 'Fehler beim Erstellen der Aufgabe',
            log_create_failed: 'Fehler beim Erstellen des Zeitprotokolls',
            log_create_success: 'Zeitprotokoll erfolgreich erstellt',
            tag_create_failed:
                'Fehler beim Erstellen des Tags für das Zeitprotokoll',
            time_log: 'Zeitprotokoll',
            daily_goal_title: 'Heutiger Fortschritt',
            delete_timelog: 'Zeitprotokoll löschen',
            delete_timelog_msg:
                'Sind Sie sicher, dass Sie dieses Zeitprotokoll löschen möchten?',
            cancel: 'Abbrechen',
            delete: 'Löschen',
            delete_success: 'Erfolg',
            delete_timelog_success: 'Zeitprotokoll gelöscht',
            delete_failed: 'Fehler',
            delete_timelog_failed: 'Zeitprotokoll konnte nicht gelöscht werden',
        },
        poromodo: {
            break_title: 'Fokus-Sitzung abgeschlossen',
            break_msg: 'Zeit für eine Pause!',
            break_complete: 'Pausensitzung abgeschlossen',
            break_complete_msg: 'Zeit sich zu konzentrieren!',
            continue: 'Fortsetzen',
            end_pomodoro: 'Pomodoro beenden',
            stop_pomodoro: 'Pomodoro verlassen',
            stop_pomodoro_msg: 'Dies stoppt den Pomodoro-Timer.',
            yes: 'Ja',
            no: 'Nein',
            break: 'Pause',
            pause: 'Pause',
        },
    },
    tag_screen: {
        layout: {
            title: 'Tags',
            add_tags: 'Tag hinzufügen',
        },
        index: {
            title: 'Tags',
        },
        add: {
            title: 'Tag hinzufügen',
            edit_tag: 'Tag bearbeiten',
            create_tag: 'Neuen Tag erstellen',
            tag_name: 'Tag-Name',
            tag_color: 'Tag-Farbe',
            name_required: 'Name ist erforderlich',
            color_required: 'Farbe ist erforderlich',
            save_btn: 'Speichern',
            delete_btn: 'Löschen',
            delete_alert: 'Tag löschen',
            delete_alert_msg:
                'Bist du sicher, dass du diesen Tag löschen möchtest?',
            cancel: 'Abbrechen',
            delete: 'Tag löschen',
            tag_create_failed: 'Fehler beim Erstellen des Tags',
            tag_create_success: 'Tag erfolgreich erstellt',
            tag_update_failed: 'Fehler beim Aktualisieren des Tags',
            tag_update_success: 'Tag erfolgreich aktualisiert',
            tag_delete_failed: 'Fehler beim Löschen des Tags',
            tag_delete_success: 'Tag erfolgreich gelöscht',
            place_holder: 'z.B. Arbeit, persönlich, Studium usw.',
            error: 'Fehler',
            requires: 'Name und Farbe sind erforderlich',
            no_time: 'Keine Zeit protokolliert',
        },
    },

    task_screen: {
        index: {
            title: 'Aufgaben',
            all_tasks: 'Alle Aufgaben',
            edit: 'Aufgabe bearbeiten',
            add: 'Aufgabe hinzufügen',
        },
        add: {
            desc_alert: 'Aufgabenbeschreibung ist erforderlich',
            name_placeholder: 'Aufgabennamen eingeben',
            save: 'Speichern',
            label: 'Aufgabenname',
        },
        edit: {
            label: 'Aufgabenname',
            delete_alert_title: 'Aufgabe löschen',
            delete_alert_msg:
                'Dies löscht alle zugehörigen Zeitaufzeichnungen. Bist du sicher, dass du diese Aufgabe löschen möchtest?',
            cancel: 'Abbrechen',
            delete: 'Löschen',
            error: 'Fehler',
            error_msg:
                'Diese Zeitaufzeichnungen gehören nicht zu dieser Aufgabe',
            ok: 'OK',
            name_placeholder: 'Aufgabennamen eingeben',
            save: 'Speichern',
            total_time: 'Gesamte genutzte Zeit:',
            import: 'Daten importieren',
            export: 'Daten exportieren',
        },
    },

    insights_screen: {
        layout: {
            title: 'Einblicke',
        },
        index: {
            no_data: 'Keine Daten zum Anzeigen',
            duration: 'Dauer',
            select_duration: 'Dauer auswählen, um Einblicke anzuzeigen',
            select_duration_label: 'Dauer auswählen, um Einblicke anzuzeigen',
            daily: 'Heute',
            weekly: 'Wöchentlich',
            monthly: 'Monatlich',
            yearly: 'Jährlich',
            all: 'Alle',
            all_time: 'Alle Zeiten',
        },
    },

    themes: {
        title: 'Systemthema',
        dark_mode: 'Dunkelmodus',
        on: 'Ein',
        off: 'Aus',
        colors: 'Farben',
        orange: 'Orange',
        yellow: 'Gelb',
        green: 'Grün',
        blue: 'Blau',
        purple: 'Lila',
        pink: 'Rosa',
        red: 'Rot',
    },

    settings: {
        title: 'Einstellungen',
        themes: 'Themen',
        themes_subtitle: 'Passen Sie Ihre App an',
        goals: 'Ziele',
        goals_subtitle: 'Setzen Sie Ihre Ziele',
        tutorial: 'Tutorial',
        tutorial_subtitle: 'Lernen Sie, wie Sie die App verwenden',
    },

    components: {
        task_card: {
            no_time: 'Keine Zeit protokolliert',
            edit: 'Bearbeiten',
        },
        tag_stat: {
            total_time: 'Gesamtzeit: ',
            logs: 'Protokolle',
            log: 'Protokoll',
        },
        time_format: {
            today: 'Heute',
            monday: 'Mo',
            tuesday: 'Di',
            wednesday: 'Mi',
            thursday: 'Do',
            friday: 'Fr',
            saturday: 'Sa',
            sunday: 'So',
        },
    },

    loading_db: 'Datenbank wird geladen...',

    goals_screen: {
        title: 'Ziele sind da, um erreicht zu werden!',
        dailyGoalTitile: 'Tägliches Zeit-Ziel',
        on: 'Ein',
        off: 'Aus',
        inputPlaceholder: 'Zeit-Ziel eingeben, z.B. 1h 30m',
        setBtn: 'Setzen',
        prevGoalTime: 'Vorheriges Ziel: ',
        notificationTitle: '⏱️ Tägliches Ziel',
        notificationMessage:
            'Stellen Sie sicher, dass Sie Ihr tägliches Ziel erreichen!',
        notificationLabel: 'Benachrichtigung',
        notificationTimeLabel: 'Benachrichtigungszeit',
    },

    alert: {
        error: 'Fehler',
        goalSet: 'Ziel gesetzt', // Alert Title
        goalSetMessage: 'Ihr Ziel wurde erfolgreich gesetzt!', // Alert Message
        ok: 'OK', // Alert Button
        goalSetError: 'Bitte setzen Sie ein gültiges Ziel', // Alert Message
        notificationSet: 'Benachrichtigung gesetzt', // Alert Title
        notificationSetMessage: 'Ihre Benachrichtigung wurde erfolgreich gesetzt!', // Alert
    },

    tutorial: {
        skip_btn: 'Tutorial überspringen',
        next_btn: 'Weiter',
        back_btn: 'Zurück',
        finish_btn: 'Fertig',
        step1: {
            title: 'Willkommen bei Timebrew!',
            description:
                'Timebrew ist eine Zeitverfolgungs-App, mit der Sie die Zeit verfolgen können, die für verschiedene Aufgaben aufgewendet wird.',
        },
        step2: {
            title: 'Verfolgen Sie Ihre Zeit',
            description:
                'Verwenden Sie den Timer, um die Zeit für Aufgaben zu verfolgen.',
        },
        step3: {
            title: 'Überprüfen Sie Ihre Zeitprotokolle',
            description:
                'Überprüfen Sie auf der Startseite Ihre neuesten Zeitprotokolle.',
        },
        step4: {
            title: 'Verwalten Sie Ihre Aufgaben und Tags',
            description:
                'Sie können Ihre Aufgaben und Tags in den jeweiligen Abschnitten verwalten.',
        },
        step5: {
            title: 'Erhalten Sie Einblicke',
            description:
                'Sehen Sie sich im Abschnitt Einblicke Einblicke in Ihre Zeitnutzung an.',
        },
        step6: {
            title: 'Themen, Ziele und mehr',
            description:
                'In den Einstellungen können Sie Themen, Ziele und mehr einstellen.',
        },
    },
}

const ru: Translation = {
    tracker_screen: {
        layout: {
            tracker: 'Трекер',
            tasks: 'Задачи',
            tags: 'Теги',
            insights: 'Анализ',
            home: 'Главная',
        },
        index: {
            title: 'Журналы',
            no_logs: 'Журналы не найдены',
            questions: 'Что вы сделали?',
            tags: 'Теги',
            add_tag: 'Добавить тег',
            save_btn: 'Сохранить',
            oops_alert: 'Ой!',
            error_alert: 'Ошибка',
            success_alert: 'Успех',
            no_time: 'Нет времени для записи',
            no_task: 'Пожалуйста, выберите задачу',
            task_create_failed: 'Не удалось создать задачу',
            log_create_failed: 'Не удалось создать запись времени',
            log_create_success: 'Запись времени успешно создана',
            tag_create_failed: 'Не удалось создать тег для записи времени',
            time_log: 'Запись времени',
            daily_goal_title: 'Прогресс на сегодня',
            delete_timelog: 'Удалить журнал времени',
            delete_timelog_msg:
                'Вы уверены, что хотите удалить этот журнал времени?',
            cancel: 'Отмена',
            delete: 'Удалить',
            delete_success: 'Успех',
            delete_timelog_success: 'Журнал времени удален',
            delete_failed: 'Ошибка',
            delete_timelog_failed: 'Не удалось удалить журнал времени',
        },
        poromodo: {
            break_title: 'Сессия фокуса завершена',
            break_msg: 'Время для перерыва!',
            break_complete: 'Сессия перерыва завершена',
            break_complete_msg: 'Время сосредоточиться!',
            continue: 'Продолжить',
            end_pomodoro: 'Закончить Помодоро',
            stop_pomodoro: 'Выйти из Помодоро',
            stop_pomodoro_msg: 'Это остановит таймер Помодоро.',
            yes: 'Да',
            no: 'Нет',
            break: 'Перерыв',
            pause: 'Пауза',
        },
    },
    tag_screen: {
        layout: {
            title: 'Теги',
            add_tags: 'Добавить тег',
        },
        index: {
            title: 'Теги',
        },
        add: {
            title: 'Добавить тег',
            edit_tag: 'Редактировать тег',
            create_tag: 'Создать новый тег',
            tag_name: 'Название тега',
            tag_color: 'Цвет тега',
            name_required: 'Имя обязательно',
            color_required: 'Цвет обязателен',
            save_btn: 'Сохранить',
            delete_btn: 'Удалить',
            delete_alert: 'Удалить тег',
            delete_alert_msg: 'Вы уверены, что хотите удалить этот тег?',
            cancel: 'Отменить',
            delete: 'Удалить тег',
            tag_create_failed: 'Не удалось создать тег',
            tag_create_success: 'Тег успешно создан',
            tag_update_failed: 'Не удалось обновить тег',
            tag_update_success: 'Тег успешно обновлен',
            tag_delete_failed: 'Не удалось удалить тег',
            tag_delete_success: 'Тег успешно удален',
            place_holder: 'Например, работа, личное, учеба и т.д.',
            error: 'Ошибка',
            requires: 'Имя и цвет обязательны',
            no_time: 'Время не записано',
        },
    },

    task_screen: {
        index: {
            title: 'Задачи',
            all_tasks: 'Все задачи',
            edit: 'Редактировать задачу',
            add: 'Добавить задачу',
        },
        add: {
            desc_alert: 'Описание задачи обязательно',
            name_placeholder: 'Введите название задачи',
            save: 'Сохранить',
            label: 'Название задачи',
        },
        edit: {
            label: 'Название задачи',
            delete_alert_title: 'Удалить задачу',
            delete_alert_msg:
                'Это удалит все связанные записи времени. Вы уверены, что хотите удалить эту задачу?',
            cancel: 'Отменить',
            delete: 'Удалить',
            error: 'Ошибка',
            error_msg: 'Эти записи времени не принадлежат этой задаче',
            ok: 'OK',
            name_placeholder: 'Введите название задачи',
            save: 'Сохранить',
            total_time: 'Общее использованное время:',
            import: 'Импорт данных',
            export: 'Экспорт данных',
        },
    },

    insights_screen: {
        layout: {
            title: 'Анализ',
        },
        index: {
            no_data: 'Нет данных для отображения',
            duration: 'Продолжительность',
            select_duration: 'Выберите продолжительность для просмотра анализа',
            select_duration_label:
                'Выберите продолжительность для просмотра анализа',
            daily: 'Сегодня',
            weekly: 'Еженедельно',
            monthly: 'Ежемесячно',
            yearly: 'Ежегодно',
            all: 'Все',
            all_time: 'Всё время',
        },
    },

    themes: {
        title: 'Тема системы',
        dark_mode: 'Тёмный режим',
        on: 'Вкл',
        off: 'Выкл',
        colors: 'Цвета',
        orange: 'Оранжевый',
        yellow: 'Жёлтый',
        green: 'Зелёный',
        blue: 'Синий',
        purple: 'Фиолетовый',
        pink: 'Розовый',
        red: 'Красный',
    },

    settings: {
        title: 'Настройки',
        themes: 'Темы',
        themes_subtitle: 'Настройте свое приложение',
        goals: 'Цели',
        goals_subtitle: 'Установите свои цели',
        tutorial: 'Обучение',
        tutorial_subtitle: 'Узнайте, как использовать приложение',
    },

    components: {
        task_card: {
            no_time: 'Время не записано',
            edit: 'Редактировать',
        },
        tag_stat: {
            total_time: 'Общее время: ',
            logs: 'записи',
            log: 'запись',
        },
        time_format: {
            today: 'Сегодня',
            monday: 'Пн',
            tuesday: 'Вт',
            wednesday: 'Ср',
            thursday: 'Чт',
            friday: 'Пт',
            saturday: 'Сб',
            sunday: 'Вс',
        },
    },

    loading_db: 'Загрузка базы данных...',

    goals_screen: {
        title: 'Цели созданы для достижения!',
        dailyGoalTitile: 'Ежедневная цель по времени',
        on: 'Вкл',
        off: 'Выкл',
        inputPlaceholder: 'Введите цель по времени, напр. 1ч 30м',
        setBtn: 'Установить',
        prevGoalTime: 'Предыдущая цель: ',
        notificationTitle: '⏱️ Ежедневная цель',
        notificationMessage:
            'Убедитесь, что вы достигли своей ежедневной цели!',
        notificationLabel: 'Уведомление',
        notificationTimeLabel: 'Время уведомления',
    },

    alert: {
        error: 'Ошибка',
        goalSet: 'Цель установлена', // Alert Title
        goalSetMessage: 'Ваша цель успешно установлена!', // Alert Message
        ok: 'OK', // Alert Button
        goalSetError: 'Пожалуйста, установите действительную цель', // Alert Message
        notificationSet: 'Уведомление установлено', // Alert Title
        notificationSetMessage: 'Ваше уведомление успешно установлено!', // Alert
    },

    tutorial: {
        skip_btn: 'Пропустить обучение',
        next_btn: 'Далее',
        back_btn: 'Назад',
        finish_btn: 'Завершить',
        step1: {
            title: 'Добро пожаловать в Timebrew!',
            description:
                'Timebrew - это приложение для отслеживания времени, которое поможет вам отслеживать время, затраченное на различные задачи.',
        },
        step2: {
            title: 'Отслеживание времени',
            description:
                'Используйте таймер для отслеживания времени, затраченного на задачи.',
        },
        step3: {
            title: 'Просмотр записей времени',
            description:
                'Просматривайте свои последние записи времени на главной странице.',
        },
        step4: {
            title: 'Управление задачами и тегами',
            description:
                'Вы можете управлять задачами и тегами в соответствующих разделах.',
        },
        step5: {
            title: 'Получение аналитики',
            description:
                'Просматривайте аналитику использования времени в разделе Аналитика.',
        },
        step6: {
            title: 'Темы, цели и другое',
            description:
                'В разделе Настройки вы можете установить темы, цели и многое другое.',
        },
    },
}

const translations = {
    en: en,
    vi: vi,
    fr: fr,
    hi: hi,
    es: es,
    zh: zh,
    ko: ko,
    ja: ja,
    de: de,
    ru: ru,
}

const i18n = new I18n(translations)

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode ?? 'en'

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true

export default i18n

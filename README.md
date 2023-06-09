# jas-ai-hackathon

Обзор архитектуры нашей платформы обнаружения аномалий, которая состоит из модуля фонового моделирования, модуля перспективного обнаружения и модуля распознавания пространственно-временной матрицы.

##### [Live demo](https://traifix.pages.dev)

### Требования backend

```
Linux (протестирован на CentOS 7.2)
Python 3.6
PyTorch 0.4.1
Opencv
sklearn
mmcv
mmdetection
```

### Установка backend

```
Установите PyTorch 0.4.1 и torchvision, следуя официальным инструкциям.
Установите mmdetection@(pytorch0.4.1) и mmcv, следуя официальным инструкциям.
Загрузите веса модели и предварительно обработанные результаты обнаружения здесь.
```

### Тестовое видео(-ы)
Поскольку запуск этой системы занимает много времени, мы разделяем задачу на несколько этапов и предоставляем предварительно рассчитанные результаты.
```
Запустите python ./src/bg_modeling/capture_and_average.py. 
Затем вы получите все исходные кадры и наложенные кадры, сохраненные в
./data/AIC_Track3/ori_images и ./data/AIC_Track3/processed_images отдельно.

Поместите загруженные модели обнаружения и reid в ./models,
а предварительно обработанные результаты обнаружения- в ./detection_results.
Протестировать видео и показать результат. питон ./detect_anomaly.py <идентификатор видео>
Протестировать все видео и сохранить результаты. ш detect_all_videos.sh >tarck3.txt
```

### Запуск  frontend

```
cd frontend
yarn install
yarn dev
```